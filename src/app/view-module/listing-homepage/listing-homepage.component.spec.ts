import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingHomepageComponent } from './listing-homepage.component';

describe('ListingHomepageComponent', () => {
  let component: ListingHomepageComponent;
  let fixture: ComponentFixture<ListingHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
