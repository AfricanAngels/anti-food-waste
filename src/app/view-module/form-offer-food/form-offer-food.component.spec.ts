import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfferFoodComponent } from './form-offer-food.component';

describe('FormOfferFoodComponent', () => {
  let component: FormOfferFoodComponent;
  let fixture: ComponentFixture<FormOfferFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfferFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOfferFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
