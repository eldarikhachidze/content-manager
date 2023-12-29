import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologySingsEditComponent } from './astrology-sings-edit.component';

describe('AstrologySingsEditComponent', () => {
  let component: AstrologySingsEditComponent;
  let fixture: ComponentFixture<AstrologySingsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstrologySingsEditComponent]
    });
    fixture = TestBed.createComponent(AstrologySingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
