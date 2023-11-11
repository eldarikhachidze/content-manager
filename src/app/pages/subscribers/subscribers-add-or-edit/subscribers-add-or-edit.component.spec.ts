import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersAddOrEditComponent } from './subscribers-add-or-edit.component';

describe('SubscribersAddOrEditComponent', () => {
  let component: SubscribersAddOrEditComponent;
  let fixture: ComponentFixture<SubscribersAddOrEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribersAddOrEditComponent]
    });
    fixture = TestBed.createComponent(SubscribersAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
