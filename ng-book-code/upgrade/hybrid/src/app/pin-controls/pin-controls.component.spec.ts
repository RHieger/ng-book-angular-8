import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinControlsComponent } from './pin-controls.component';

xdescribe('PinControlsComponent', () => {
  let component: PinControlsComponent;
  let fixture: ComponentFixture<PinControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
