import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDescriptionComponent } from './listing-description.component';

describe('ListingDescriptionComponent', () => {
  let component: ListingDescriptionComponent;
  let fixture: ComponentFixture<ListingDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
