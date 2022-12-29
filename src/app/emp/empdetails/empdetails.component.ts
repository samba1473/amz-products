import { Component,OnInit } from '@angular/core';
import { EmpdetailsService } from '../empdetails.service';

import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit{

  constructor(private _serv:EmpdetailsService){}

  newEmpDetails:any[]=[];
  balanceFrozen: boolean = true;
  displayMaximizable:boolean=false;

  addempdatadata=new FormGroup({
    fname:new FormControl(),
    mname:new FormControl(),
    lname:new FormControl(),
    empid:new FormControl(),
    gender:new FormControl(),
    department:new FormControl(),
    dob:new FormControl(),
    dateofjoining: new FormControl(),
    myValues:new FormControl([])
  })

  cities = ["developer","designer","tester"];
  openaddstdntpopup(){
    this.displayMaximizable=true;
  }
  empaddeddata(id){
    console.log(this.addempdatadata.value);
    
  }
  checkvalue:any[]=[]
  onchange(event){
    if(event.target.checked){
      console.log(event.target.value);
      this.checkvalue.push(event.target.value)
      this.addempdatadata.value.myValues=this.checkvalue;
      console.log(this.checkvalue);
      console.log(this.checkvalue);
    }
  }
 ngOnInit(): void {
   this._serv.getempdetails().subscribe((res:any)=>{
    this.newEmpDetails=res
   })
 }
}
