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
  sum=0;
  ss=0;
  constructor(
    private EmitDataService:EmitDataService,
    private _serv:SaleryService
  ){}

  addsalerydata=new FormGroup({
    id:new FormControl(),
    basic:new FormControl('',[Validators.required]),
    hra:new FormControl('',[Validators.required]),
    lta:new FormControl('',[Validators.required]),
    splallowence:new FormControl('',[Validators.required]),
    foodAllowence:new FormControl('',[Validators.required]),

  })
private totalSalval;



  getsalEmpDetrails(){  
    this.totalsal; 
    this.addsalerydata.value.id=this.saleryclickID
    this._serv.getsalEmpDetails().subscribe(data=>{
       this.gerempDetails=data;  
      this.gerempDetails.find((ress:any)=>{
        this._serv.getTotalsaleryVal().subscribe(dd=>{
          this.totalSalval=dd;
          this.totalSalval.find((reqq:any)=>{
            if(ress.id == reqq.id){
              const aaa=ress
              const bbb=reqq 
              const obj3 = {...aaa, ...bbb};
              
              this.gerempDetails = this.gerempDetails.filter(function( obj ) {
                return obj.id !== ress.id;
              });
 
              this.gerempDetails.unshift(obj3);  

              this.gerempDetails.sort((a, b) => {
                return a.id - b.id;
            });
              console.log(this.gerempDetails);

              this.gerempDetails.find((ress:any)=>{ 
                if(ress.basic != null && ress.basic !=undefined){
                  this.totalsal = ress.basic + 
                                  ress.hra + 
                                  ress.lta +
                                  ress.splallowence +
                                  ress.foodAllowence
            
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
                      // ress.ee=this.totalsal 
                      
                      ress.totleSalery=this.totalsal   
                      
                }else{
                  ress.lta="-";
                  ress.splallowence="-";
                  ress.foodAllowence="-"; 
                  ress.totleSalery='-';                  
                } 
                
              }) 
                      
            }           
          })
          
        })
        
      })      
       
    })
   
  }



  openPopup(id:any){
    this.displayMaximizable=true;
    this.saleryclickID=id
    console.log(this.saleryclickID);    
  }

 updatesaleryData(){
    this.addsalerydata.value.id=this.saleryclickID
    
  this._serv.postupdatedSaleryDetails(this.addsalerydata.value).subscribe((data)=>{
      console.log("success");
    
    })    
    
    this.addsalerydata.reset()
    this.displayMaximizable=false;
   this.getsalEmpDetrails()  
  }
  ngOnInit(): void {
    this. getsalEmpDetrails();
    this.EmitDataService.clicked(false)
   

  } 
}
