import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetService } from '../../services/get.service';
import { MonthlyBill } from '../../models/monthlyBill.model';

@Component({
  selector: 'app-monthlybill',
  templateUrl: './monthlybill.component.html',
  styleUrl: './monthlybill.component.css'
})
export class MonthlybillComponent {

  mbill: MonthlyBill;

  @ViewChild('form') billForm:NgForm

  constructor(private mbillService: GetService) {}

  onSubmit(){
    let val=this.billForm.value;
    console.log(typeof(val['month']))
    this.mbillService.getBillsByMonth(val['month']).subscribe({
      next:(data:MonthlyBill)=>{
       this.mbill=data;
        //console.log(data)
      },
      error:(err)=>{
 
      }
    })
  }

}
