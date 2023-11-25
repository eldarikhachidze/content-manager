import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddOrEditComponent } from './event-add-or-edit.component';

describe('EventAddOrEditComponent', () => {
  let component: EventAddOrEditComponent;
  let fixture: ComponentFixture<EventAddOrEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventAddOrEditComponent]
    });
    fixture = TestBed.createComponent(EventAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
