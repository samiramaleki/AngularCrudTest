import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInvoiceComponent } from './add-edit-invoice.component';

describe('AddEditinvoiceComponent', () => {
  let component: AddEditInvoiceComponent;
  let fixture: ComponentFixture<AddEditInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

