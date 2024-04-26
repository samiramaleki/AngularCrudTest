import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.css']
})
export class AddEditInvoiceComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input() emp: any;
  InvoiceId = "";
  InvoiceNumber = 0
  ExternalInvoiceNumber = "";
  TotalAmount = 0;
  DepartmentList: any = [];
  InvoiceStatus= 0;

  ngOnInit(): void {
    this.loadInvoiceList();
  }

  loadInvoiceList() {
    debugger;
      this.InvoiceId = this.emp.invoiceId;
      this.ExternalInvoiceNumber = this.emp.externalInvoiceNumber;
      this.InvoiceNumber = this.emp.invoiceNumber;
      this.TotalAmount =this.emp.totalAmount;
      this.InvoiceStatus = parseInt(this.emp.invoiceStatus);
  }

  addInvoice() {
    debugger;
    var val = {
      InvoiceId: this.InvoiceId,
      ExternalInvoiceNumber: this.ExternalInvoiceNumber,
      InvoiceNumber: this.InvoiceNumber,
      TotalAmount: this.TotalAmount,
      InvoiceStatus: Number(this.InvoiceStatus)
    };

    this.service.addInvoice(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updatInvoice() {
    debugger;
    var val = {
      InvoiceId: this.InvoiceId,
      ExternalInvoiceNumber: this.ExternalInvoiceNumber,
      InvoiceNumber: this.InvoiceNumber,
      TotalAmount: this.TotalAmount,
      InvoiceStatus: Number(this.InvoiceStatus)
    };

    this.service.updateInvoice(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
