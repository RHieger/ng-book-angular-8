import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand.component';

xdescribe('DemoFormWithValidationsShorthandComponent', () => {
  let component: DemoFormWithValidationsShorthandComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsShorthandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsShorthandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationsShorthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
