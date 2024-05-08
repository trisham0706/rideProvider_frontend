import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddRide } from '../models/addRide.model';
import { UpdateRide } from '../models/editRide.model';
import { updateRider } from '../models/editRider.model';
import { Ride } from '../models/Ride.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

 updateRider(rpId:string,status:{status:string}): Observable<updateRider>{
    return this.http.put<updateRider>(this.baseApiUrl + `/api/RideProvide/${rpId}/update`, status);
 }

 updateTrip(tripId:string, updateRide: UpdateRide): Observable<UpdateRide>{
    return this.http.put<UpdateRide>(this.baseApiUrl + `/api/RideProvide/bookings/${tripId}`,updateRide);
 }

 getRider(rpId:string): Observable<Ride>{
  console.log(this.baseApiUrl + `api/RideProvide/RiderDetails/${rpId}`)
  return this.http.get<Ride>(this.baseApiUrl + `/api/RideProvide/RiderDetails/${rpId}`);
 }

 getTrip(tripId:string): Observable<UpdateRide>{
  return this.http.get<UpdateRide>(this.baseApiUrl + `/api/RideProvide/TripDetails/${tripId}`);
 }
}
