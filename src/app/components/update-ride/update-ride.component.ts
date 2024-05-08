import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { UpdateRide } from '../../models/editRide.model';
import { Ride } from '../../models/Ride.model';
import { rideProvide } from '../../models/RideProvide.model';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-update-ride',
  templateUrl: './update-ride.component.html',
  styleUrl: './update-ride.component.css'
})
export class UpdateRideComponent implements OnInit {

  trip:UpdateRide;
  tripId:string;

  @ViewChild('form') tripForm:NgForm;

  constructor(private upservice:UpdateService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {

  }

  onClick(){
    console.log(this.tripId)
      this.upservice.getTrip(this.tripId).subscribe({
        next:(data:UpdateRide)=>{
            console.log(data);
            this.trip=data[0]
            this.tripForm.form.patchValue({
              'creatorUserId':this.trip.creatorUserId,
              'vehicleId':this.trip.vehicleId,
              'rideDate':this.trip.rideDate,
              'rideTime':this.trip.rideTime,
              'rideStatus':this.trip.rideStatus,
              'noOfSeat':this.trip.noOfSeat,
              'seatsFilled':this.trip.seatsFilled,
              'fromLoc':this.trip.fromLoc,
              'toLoc':this.trip.toLoc
            })
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  
  onSubmit(){
   this.upservice.updateTrip(this.tripId,this.tripForm.value).subscribe({
    next:res=>{
      alert("Trip Updated Successfully")
      console.log("updated successfully");
    },
    error:err=>{
      console.log(err);
    }
   });
  }

}
