import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-in-dependent-credit-note',
  templateUrl: './add-edit-in-dependent-credit-note.component.html',
  styleUrls: ['./add-edit-in-dependent-credit-note.component.css']
})
export class AddEditInDependentCreditNoteComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() inDependentCreditNote: any;
  InDependentCreditNoteId="";
  ExternalCreditNumber= "";
  CreditNumber= 0;
  TotalAmount= 0;
  CreditStatus=0;

  ngOnInit(): void {
    debugger;
    }

    loadInvoiceList() {
      debugger;
        this.InDependentCreditNoteId= this.inDependentCreditNote.inDependentCreditNoteId;
        this.ExternalCreditNumber = this.inDependentCreditNote.externalCreditNumber;
        this.CreditNumber = this.inDependentCreditNote.creditNumber;
        this.TotalAmount =this.inDependentCreditNote.creditTotalAmount;
        this.CreditStatus = parseInt(this.inDependentCreditNote.creditStatus);
    }

    addInDependentCreditNote() {
      debugger;
      var val = {
        ExternalCreditNumber: this.ExternalCreditNumber,
        CreditNumber: this.CreditNumber,
        TotalAmount: this.TotalAmount,
        CreditStatus: Number(this.CreditStatus)
      };
  
      this.service.addInDependentCreditNote(val).subscribe(res => {
        alert(res.toString());
      });
    }

}
