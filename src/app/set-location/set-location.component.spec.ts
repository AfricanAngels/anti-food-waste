import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLocationComponent } from './set-location.component';

describe('SetLocationComponent', () => {
  let component: SetLocationComponent;
  let fixture: ComponentFixture<SetLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
