import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddOrAditComponent } from './users-add-or-adit.component';

describe('UsersAddOrAditComponent', () => {
  let component: UsersAddOrAditComponent;
  let fixture: ComponentFixture<UsersAddOrAditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersAddOrAditComponent]
    });
    fixture = TestBed.createComponent(UsersAddOrAditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
