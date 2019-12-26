import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../services/user.service';
import { UserDemoComponent } from './user-demo.component';

describe('UserDemoComponent', () => {
  let component: UserDemoComponent;
  let fixture: ComponentFixture<UserDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDemoComponent ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
