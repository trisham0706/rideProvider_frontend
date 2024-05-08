import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Bill } from '../models/bill.model';
import { MonthlyBill } from '../models/monthlyBill.model';
import { Smile } from '../models/smile.model';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getBilldetails(tripId:string): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.baseApiUrl + `/api/RideProvide/generatebill/${tripId}`);
  }

  getBillsByMonth(month:number):Observable<MonthlyBill>{
    return this.http.get<MonthlyBill>(this.baseApiUrl + `/api/RideProvide/billing/${month}`);
  }

  getSmileDetailsByMonthNrpId(month:number,rpId:string):Observable<Smile[]>{
    return this.http.get<Smile[]>(this.baseApiUrl +`/api/Smile/${month}/${rpId}`);
  }
}
