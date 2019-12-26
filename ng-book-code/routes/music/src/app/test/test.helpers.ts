/* tslint:disable forin */
declare var jasmine: any;
import { DebugElement } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { By } from "@angular/platform-browser";

class MockResponse extends HttpResponse<any> {
  _json: any;

  constructor(json: any) {
    super(new HttpResponse());
    this._json = json;
  }

  json() {
    return this._json;
  }
}

export class TestHelper {
  /** Gets a child DebugElement by tag name. */
  static getChildByTagName(
    parent: DebugElement,
    tagName: string
  ): DebugElement {
    return parent.query(
      debugEl => debugEl.nativeElement.tagName.toLowerCase() === tagName
    );
  }

  /**
   * Gets a child DebugElement by css selector.
   *
   * The child of DebugElement are other elements that are "known" to
   * Angular.
   */
  static getChildrenBySelector(
    parent: DebugElement,
    selector: string
  ): DebugElement[] {
    const results = [];

    parent.queryAll(By.css(selector)).forEach(el => results.push(el));
    parent.children.forEach(de => {
      TestHelper.getChildrenBySelector(de, selector).forEach(el =>
        results.push(el)
      );
    });

    return results;
  }

  static isPhantomJS(): boolean {
    return (
      navigator &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("PhantomJS") > -1
    );
  }

  static mockJSONResponse(payload: any) {
    return new MockResponse(payload);
  }
}

export class SpyObject {
  constructor(type?: any) {
    if (type) {
      for (const prop in type.prototype) {
        let m: any = null;
        try {
          m = type.prototype[prop];
        } catch (e) {
          // As we are creating spys for abstract classes,
          // these classes might have getters that throw when they are accessed.
          // As we are only auto creating spys for methods, this
          // should not matter.
        }
        if (typeof m === "function") {
          this.spy(prop);
        }
      }
    }
  }

  spy(name: string) {
    if (!(this as any)[name]) {
      (this as any)[name] = jasmine.createSpy(name);
    }
    return (this as any)[name];
  }

  prop(name: string, value: any) {
    (this as any)[name] = value;
  }
}
