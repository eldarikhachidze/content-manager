import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognosesAddOrEditComponent } from './prognoses-add-or-edit.component';

describe('PrognosesAddOrEditComponent', () => {
  let component: PrognosesAddOrEditComponent;
  let fixture: ComponentFixture<PrognosesAddOrEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrognosesAddOrEditComponent]
    });
    fixture = TestBed.createComponent(PrognosesAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
