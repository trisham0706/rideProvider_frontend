import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddRide } from '../models/addRide.model';
import { UpdateRide } from '../models/editRide.model';
import { updateRider } from '../models/editRider.model';
import { rideProvide } from '../models/RideProvide.model';

@Injectable({
   providedIn: 'root'
})

export class RideProviderService {

   baseApiUrl : string = environment.baseApiUrl;

   constructor(private http: HttpClient) { }

   registernewRider(addrider: rideProvide): Observable<rideProvide> {
      return this.http.post<rideProvide>(this.baseApiUrl + '/api/RideProvide/new',
      addrider);
   }

   registerTrip(addRideForm : AddRide): Observable<any> { 
      return this.http.post<any>(this.baseApiUrl + '/api/RideProvide/addbooking', 
      addRideForm);
   }

}

