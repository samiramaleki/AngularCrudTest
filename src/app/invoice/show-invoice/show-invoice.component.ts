import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.css']
})
export class ShowInvoiceComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  InvoiceList: any = [];
  ModalTitle = "";
  DependentCrediModalNoteTitle="";
  InDependentCrediModalNoteTitle="";
  ActivateAddEditEmpComp: boolean = false;
  ActivateAddEditDdependentCreditNoteComp:boolean = false;
  ActivateAddEditInDdependentCreditNoteComp:boolean=false;
  emp: any;
  dependentCreditNote:any;
  inDependentCreditNote: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  invoiceAddClick() {
    debugger;
    this.emp = {
      InvoiceId: "",
      ExternalInvoiceNumber: "",
      InvoiceNumber: 0,
      TotalAmount: 0,
      InvoiceStatus: 1
    }
    this.ModalTitle = "Add Invoice";
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    this.ModalTitle = "Edit Invoice";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    debugger;
    if (confirm('Are you sure??')) {
      this.service.deleteInvoice(item.invoiceId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.ActivateAddEditDdependentCreditNoteComp= false
    this.refreshEmpList();
  }

  dependentCreditNoteaddClick(){
    debugger;
    this.dependentCreditNote = {
      InvoiceId: "",
      DependentCreditNoteId:"", 
      ExternalCreditNumber: "",
      CreditNumber: 0,
      TotalAmount: 0,
      CreditStatus: 1
    }
    this.DependentCrediModalNoteTitle = "Add  DependentCreditNote";
    this.ActivateAddEditDdependentCreditNoteComp = true;
  }

  dependentCreditNoteeditClick(item: any) {
    this.dependentCreditNote = item;
    this.DependentCrediModalNoteTitle = "Edit DependentCreditNote";
    this.ActivateAddEditDdependentCreditNoteComp = true;
  }

  inDependentCreditNoteaddClick()
  {
    debugger;
    this.inDependentCreditNote = {
      InDependentCreditNoteId:"", 
      ExternalCreditNumber: "",
      CreditNumber: 0,
      TotalAmount: 0,
      CreditStatus: 1
    }

    this.InDependentCrediModalNoteTitle = "Add  InDependentCreditNote";
    this.ActivateAddEditInDdependentCreditNoteComp = true;
  }

  inDependentCreditNoteeditClick(item: any) {

    this.inDependentCreditNote = item;
    this.InDependentCrediModalNoteTitle = "Edit InDependentCreditNote";
    this.ActivateAddEditInDdependentCreditNoteComp = true;
  }

  refreshEmpList() {
    this.service.getInvoiceList().subscribe(data => {
      this.InvoiceList = data;
    });
  }

  inDependentCreditNotedeleteClick(item: any) {
    debugger;
    if (confirm('Are you sure??')) {
      this.service.deleteInDependentCreditNote(item.independentCreditNoteId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
  
  dependentCreditNotedeleteClick(item: any) {
    debugger;
    if (confirm('Are you sure??')) {
      this.service.deleteDependentCreditNote(item.dependentCreditNoteId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  editdependentCreditNoteClick(item: any) {
    this.dependentCreditNote = item;
    this.DependentCrediModalNoteTitle = "Edit DependentCreditNote";
    this.ActivateAddEditDdependentCreditNoteComp = true;
  }
}
