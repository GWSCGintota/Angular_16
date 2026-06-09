import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsComponentComponent } from './featured-products-component.component';

describe('FeaturedProductsComponentComponent', () => {
  let component: FeaturedProductsComponentComponent;
  let fixture: ComponentFixture<FeaturedProductsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedProductsComponentComponent]
    });
    fixture = TestBed.createComponent(FeaturedProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
