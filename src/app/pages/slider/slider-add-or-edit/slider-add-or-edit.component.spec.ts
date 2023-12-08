import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAddOrEditComponent } from './slider-add-or-edit.component';

describe('SliderComponent', () => {
  let component: SliderAddOrEditComponent;
  let fixture: ComponentFixture<SliderAddOrEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderAddOrEditComponent]
    });
    fixture = TestBed.createComponent(SliderAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
