import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsAddOrEditComponent } from './blogs-add-or-edit.component';

describe('BlogsAddOrEditComponent', () => {
  let component: BlogsAddOrEditComponent;
  let fixture: ComponentFixture<BlogsAddOrEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsAddOrEditComponent]
    });
    fixture = TestBed.createComponent(BlogsAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
