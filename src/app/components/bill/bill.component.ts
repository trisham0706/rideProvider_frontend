import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { Bill } from '../../models/bill.model';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {

  bill: Bill[];

  @ViewChild('form') billForm:NgForm


  constructor(private bService: GetService) { }

  onSubmit(){
    let val=this.billForm.value;
    this.bService.getBilldetails(val['rideId']).subscribe({
      next:(data:Bill[])=>{
        this.bill=data;
      },
      error:(err)=>{

      }
    })
  }

}
