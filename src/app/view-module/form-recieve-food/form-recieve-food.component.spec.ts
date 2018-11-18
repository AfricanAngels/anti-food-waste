import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecieveFoodComponent } from './form-recieve-food.component';

describe('FormRecieveFoodComponent', () => {
  let component: FormRecieveFoodComponent;
  let fixture: ComponentFixture<FormRecieveFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecieveFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecieveFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
