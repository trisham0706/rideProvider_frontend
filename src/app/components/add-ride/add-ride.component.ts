import { Component, OnInit, ViewChild } from '@angular/core';
//import { Router } from '@angular/router';
import { AddRide } from '../../models/addRide.model';
//import { rideProvide } from '../../models/RideProvide.model';
import { RideProviderService } from '../../services/ride-provider.service';
import { Time } from "@angular/common";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrl: './add-ride.component.css'
})
export class AddRideComponent implements OnInit {


  @ViewChild('form') form:NgForm;

    
  constructor(private rpService :RideProviderService) { }

  ngOnInit(): void {

  }


  handleSubmit(){
    this.rpService.registerTrip(this.form.value)
    .subscribe({
      next: () => {
        alert("Trip Added Successfully")
        console.log("Added Successfully");
      },
      error:(err)=>{
        console.log(err)
      }
    });

  }


}
