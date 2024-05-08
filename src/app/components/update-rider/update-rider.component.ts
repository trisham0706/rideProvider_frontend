import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { updateRider } from '../../models/editRider.model';
import { Ride } from '../../models/Ride.model';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-update-rider',
  templateUrl: './update-rider.component.html',
  styleUrl: './update-rider.component.css'
})
export class UpdateRiderComponent implements OnInit {
  ride:Ride;
  rpId:string;
  @ViewChild('form') rideForm:NgForm;
   
  constructor(private upservice:UpdateService,private route:ActivatedRoute,private router:Router) {}
    
  ngOnInit(): void {

  }

    onClick(){
      console.log(this.rpId)
      this.upservice.getRider(this.rpId).subscribe({
          next:(data:Ride)=>{
            console.log(data)
            this.ride=data
            this.rideForm.form.patchValue({
              'status':this.ride.status
            })
          },
          error:(err)=>{
            console.log(err);
          }
        })
    }
 
    onSubmit(){
      console.log(this.rideForm.value);
     this.upservice.updateRider(this.rpId,this.rideForm.value).subscribe({
      next:response=>{
        alert("Updated Successfully")
        console.log('updated successfully')
       },
       error:error=>console.log('error occured',error)
     });
    }
}
