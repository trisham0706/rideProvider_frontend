import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Smile } from '../../models/smile.model';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-smiles',
  templateUrl: './smiles.component.html',
  styleUrl: './smiles.component.css'
})
export class SmilesComponent {

  smiles:Smile[];
 
  @ViewChild('form') smileForm:NgForm
 
  constructor(private smileService:GetService){}
 
 
  onSubmit(){
    let val=this.smileForm.value;
    console.log(val)
    this.smileService.getSmileDetailsByMonthNrpId(val['month'],val['tripId']).subscribe({
      next:(data:Smile[])=>{
        this.smiles=data;
        console.log(data)
      },
      error:(err)=>{
 
      }
    })
  }

}
