import {
  async,
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { MoreHttpRequestsComponent } from './more-http-requests.component';

describe('MoreHttpRequestsComponent', () => {
  let component: MoreHttpRequestsComponent;
  let fixture: ComponentFixture<MoreHttpRequestsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MoreHttpRequestsComponent],
        imports: [HttpClientTestingModule]
      });
    })
  );

  beforeEach(
    async(
      inject([HttpTestingController], _httpMock => {
        fixture = TestBed.createComponent(MoreHttpRequestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        httpMock = _httpMock;
      })
    )
  );

  afterEach(
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    })
  );

  it(
    'performs a POST',
    async(() => {
      component.makePost();

      const req = httpMock.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      expect(req.request.method).toEqual('POST');
      req.flush({ response: 'OK' });
      expect(component.data).toEqual({ response: 'OK' });

      httpMock.verify();
    })
  );

  it(
    'performs a DELETE',
    async(() => {
      component.makeDelete();

      const req = httpMock.expectOne(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      expect(req.request.method).toEqual('DELETE');
      req.flush({ response: 'OK' });
      expect(component.data).toEqual({ response: 'OK' });

      httpMock.verify();
    })
  );

  it(
    'sends correct headers',
    async(() => {
      component.makeHeaders();

      const req = httpMock.expectOne(
        req =>
          req.headers.has('X-API-TOKEN') &&
          req.headers.get('X-API-TOKEN') == 'ng-book'
      );

      req.flush({ response: 'OK' });
      expect(component.data).toEqual({ response: 'OK' });

      httpMock.verify();
    })
  );
});
