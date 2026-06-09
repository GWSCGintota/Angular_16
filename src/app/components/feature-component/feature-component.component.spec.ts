import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponentComponent } from './feature-component.component';

describe('FeatureComponentComponent', () => {
  let component: FeatureComponentComponent;
  let fixture: ComponentFixture<FeatureComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureComponentComponent]
    });
    fixture = TestBed.createComponent(FeatureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
