import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubscribeComponent } from './event-subscribe.component';

describe('EventSubscribeComponent', () => {
  let component: EventSubscribeComponent;
  let fixture: ComponentFixture<EventSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSubscribeComponent]
    });
    fixture = TestBed.createComponent(EventSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
