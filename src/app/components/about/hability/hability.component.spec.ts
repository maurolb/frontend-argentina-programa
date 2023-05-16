import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilityComponent } from './hability.component';

describe('HabilityComponent', () => {
  let component: HabilityComponent;
  let fixture: ComponentFixture<HabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilityComponent]
    });
    fixture = TestBed.createComponent(HabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
