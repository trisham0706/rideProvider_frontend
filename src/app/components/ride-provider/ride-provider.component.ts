import { Component, OnInit } from '@angular/core';
import { rideProvide} from '../../models/RideProvide.model';
import { RideProviderService } from '../../services/ride-provider.service';

@Component({
  selector: 'app-ride-provider',
  templateUrl: './ride-provider.component.html',
  styleUrl: './ride-provider.component.css'
})
export class RideProviderComponent implements OnInit { 

registerRider: rideProvide = {

  birthdate: '',
  adharcard: 0,
  emailId: '',
  phone: 0,
  firstName: '',
  lastName: '',
  dlNo: '',
  validUpto: ''

};

constructor(private RPService: RideProviderService ) { }

ngOnInit() : void {}


registernewRider(){
  // console.log(this.registerRider)
    this.RPService.registernewRider(this.registerRider)
    .subscribe({
     next: (rideProvide) => {
        alert("User Registered Successfully")
        console.log("Added Successfully");
      },
      error:(err)=>{
        console.log(err)
      }
    });

}


}
