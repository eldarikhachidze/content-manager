import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryAddOrEditComponent} from './category-add-or-edit.component';

describe('CategoryAddOrEditComponent', () => {
  let component: CategoryAddOrEditComponent;
  let fixture: ComponentFixture<CategoryAddOrEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAddOrEditComponent]
    });
    fixture = TestBed.createComponent(CategoryAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
