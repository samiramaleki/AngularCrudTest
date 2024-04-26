import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditDependentCreditNoteComponent } from './dependentCreditNote/add-edit-dependentCreditNote/add-edit-dependentCreditNote.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShowInvoiceComponent } from './invoice/show-invoice/show-invoice.component';
import { AddEditInvoiceComponent } from './invoice/add-edit-invoice/add-edit-invoice.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditDependentCreditNoteComponent,
    InvoiceComponent,
    ShowInvoiceComponent,
    AddEditInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
