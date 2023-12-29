import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologySingsComponent } from './astrology-sings.component';

describe('AstrologySingsComponent', () => {
  let component: AstrologySingsComponent;
  let fixture: ComponentFixture<AstrologySingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstrologySingsComponent]
    });
    fixture = TestBed.createComponent(AstrologySingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
