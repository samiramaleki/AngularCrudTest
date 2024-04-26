import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-dependentCreditNote',
  templateUrl: './add-edit-dependentCreditNote.component.html',
  styleUrls: ['./add-edit-dependentCreditNote.component.css']
})
export class AddEditDependentCreditNoteComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() dependentCreditNote: any;
  InvoiceId= "";
  DependentCreditNoteId="";
  ExternalCreditNumber= "";
  CreditNumber= 0;
  TotalAmount= 0;
  CreditStatus=0;
  InvoiceSimpleList: any[] = [];

 ngOnInit(): void {
  debugger;
    this.loadInvoiceList(); 
    this.getInvoiceSimpleList();
  }

  loadInvoiceList() {
    debugger;
      this.InvoiceId = this.dependentCreditNote.invoiceId;
      this.DependentCreditNoteId= this.dependentCreditNote.dependentCreditNoteId;
      this.ExternalCreditNumber = this.dependentCreditNote.externalCreditNumber;
      this.CreditNumber = this.dependentCreditNote.creditNumber;
      this.TotalAmount =this.dependentCreditNote.creditTotalAmount;
      this.CreditStatus = parseInt(this.dependentCreditNote.creditStatus);
  }

  addDependentCreditNote() {
    debugger;
    var val = {
      InvoiceId: this.InvoiceId,
      ExternalCreditNumber: this.ExternalCreditNumber,
      CreditNumber: this.CreditNumber,
      TotalAmount: this.TotalAmount,
      CreditStatus: Number(this.CreditStatus)
    };

    this.service.addDependentCreditNote(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDependentCreditNote() {
    debugger;
    var val = {
      InvoiceId: this.InvoiceId,
      DependentCreditNoteId: this.DependentCreditNoteId,
      ExternalCreditNumber: this.ExternalCreditNumber,
      CreditNumber: this.CreditNumber,
      TotalAmount: this.TotalAmount,
      CreditStatus: Number(this.CreditStatus)
    };

    this.service.updateDependentCreditNote(val).subscribe(res => {
      alert(res.toString());
    });
  }

  getInvoiceSimpleList() {
    this.service.invoiceSimpleList().subscribe(
      (invoices: any[]) => {
        this.InvoiceSimpleList = invoices;
      },
      (error) => {
        console.error('Error fetching invoices:', error);
      }
    );
  }
}
