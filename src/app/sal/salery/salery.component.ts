import { Component,OnInit } from '@angular/core';
import { EmitDataService } from 'src/app/student/student/emitCartService';
import { SaleryService } from '../salery.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salery',
  templateUrl: './salery.component.html',
  styleUrls: ['./salery.component.scss']
})
export class SaleryComponent implements  OnInit{
  gerempDetails:any ;
  displayMaximizable:boolean=false;
  saleryclickID:any;
  totalsal:any;
  aa:any;
  constructor(
    private EmitDataService:EmitDataService,
    private _serv:SaleryService
  ){}

  addsalerydata=new FormGroup({
    id:new FormControl(),
    basic:new FormControl(),
    hra:new FormControl(),
    lta:new FormControl(),
    splallowence:new FormControl(),
    foodAllowence:new FormControl(),

  })
private totalSalval;

  getsalEmpDetrails(){
    this.totalsal;
    this.addsalerydata.value.id=this.saleryclickID
    this._serv.getsalEmpDetails().subscribe(data=>{
       this.gerempDetails=data
      this.gerempDetails.find((ress:any)=>{
        this._serv.getTotalsaleryVal().subscribe(dd=>{
          this.totalSalval=dd;
          this.totalSalval.find((reqq:any)=>{
            if(ress.id == reqq.id){
              this.totalsal = reqq.basic + 
                              reqq.hra + 
                              reqq.lta + 
                              reqq.splallowence +
                              reqq.foodAllowence
              
              if(10000 < this.totalsal && this.totalsal < 300000){
                this.totalsal= this.totalsal*15/100
              }else if(30001 < this.totalsal && this.totalsal < 700000){
                this.totalsal= this.totalsal*25/100
              }else if(700001 < this.totalsal && this.totalsal < 1200000){
                this.totalsal= this.totalsal*30/100
              }else if(1200001 < this.totalsal && this.totalsal < 1600000){
                this.totalsal= this.totalsal*35/100
              }else if( this.totalsal > 1600001){
                this.totalsal= this.totalsal*40/100
              }
             ress.ee=this.totalsal              
            }
          })
        })
        
      })
      // gerempDetails
      Object.keys(this.gerempDetails).forEach(key => { console.log(this.gerempDetails[key] , this.gerempDetails[key]) })
      for (var key in this.gerempDetails) {
        if (this.gerempDetails.hasOwnProperty(key)) {
            console.log(key + " -> " + this.gerempDetails[key]);
        }
      }
    })
   
  }

  openPopup(id:any){
    this.displayMaximizable=true;
    this.saleryclickID=id
    console.log(this.saleryclickID);    
  }

  updatesaleryData(){
    this.addsalerydata.value.id=this.saleryclickID
    console.log(this.addsalerydata.value);
    this._serv.postupdatedSaleryDetails(this.addsalerydata.value).subscribe((data)=>{
      console.log("success");
    })    
    this.getsalEmpDetrails() 
    this.addsalerydata.reset()
    this.displayMaximizable=false;
  }
  ngOnInit(): void {
    this. getsalEmpDetrails();
    this.EmitDataService.clicked(false)

  } 
}
