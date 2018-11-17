import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThirdpartyComponent } from './login-thirdparty.component';

describe('LoginThirdpartyComponent', () => {
  let component: LoginThirdpartyComponent;
  let fixture: ComponentFixture<LoginThirdpartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginThirdpartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginThirdpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
