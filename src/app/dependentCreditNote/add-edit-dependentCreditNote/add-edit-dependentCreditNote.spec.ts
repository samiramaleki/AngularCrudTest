import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDependentCreditNoteComponent } from './add-edit-dependentCreditNote.component';

describe('AddEditDependentCreditNoteComponent', () => {
  let component: AddEditDependentCreditNoteComponent;
  let fixture: ComponentFixture<AddEditDependentCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDependentCreditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDependentCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
