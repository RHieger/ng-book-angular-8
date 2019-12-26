import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPinComponent } from './add-pin.component';

xdescribe('AddPinComponent', () => {
  let component: AddPinComponent;
  let fixture: ComponentFixture<AddPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
