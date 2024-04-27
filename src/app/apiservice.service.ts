import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:5005/api/';

  constructor(private http: HttpClient) { }

  // DependentCreditNote
  invoiceSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Document/simple-invoice');
  }

  addDependentCreditNote(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Document/add-dependent-creditNote', dept, httpOptions);
  }

  updateDependentCreditNote(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Document/update-dependent-creditNote/', dept, httpOptions);
  }

  // Invoice
  getInvoiceList(): Observable<any[]> {
    
    return this.http.get<any[]>(this.apiUrl + 'Document/invoices');
  }

  addInvoice(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Document/add-invoice', emp, httpOptions);
  }

  GetInvoiceById(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Document/invoice-by-${id}', emp, httpOptions);
  }
  updateInvoice(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Document/update-invoice/', emp, httpOptions);
  }

  deleteInvoice(id: string): Observable<string> {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'Document/delete-' + id + '-invoice', httpOptions);
  }

  // InDependentInvoie
  addInDependentCreditNote(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Document/add-independent-creditNote', dept, httpOptions);
  }
}
