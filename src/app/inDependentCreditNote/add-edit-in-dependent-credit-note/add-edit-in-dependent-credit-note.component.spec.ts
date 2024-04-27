import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInDependentCreditNoteComponent } from './add-edit-in-dependent-credit-note.component';

describe('AddEditInDependentCreditNoteComponent', () => {
  let component: AddEditInDependentCreditNoteComponent;
  let fixture: ComponentFixture<AddEditInDependentCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInDependentCreditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInDependentCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
