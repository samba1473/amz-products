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
  mergedData:any[]=[]; 
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
       this.gerempDetails=data; 
      //  this.mergedData = data 
      this.gerempDetails.find((ress:any)=>{
        this._serv.getTotalsaleryVal().subscribe(dd=>{
          this.totalSalval=dd;
          this.totalSalval.find((reqq:any)=>{
            if(ress.id == reqq.id){
              const aaa=ress
              const bbb=reqq
              // console.log(aaa);
              // console.log(bbb);
              const obj3 = {...aaa, ...bbb};
              const ght =[obj3]
              console.log(ght);   
              this.gerempDetails.push(obj3)
              console.log(this.gerempDetails); 
              
              // this.gerempDetails.push(obj3) 
              // console.log( this.gerempDetails);
              
              
              // console.log(sss);
              
              // const seen = new Set();
              // this.gerempDetails = this.gerempDetails.filter(el => {
              //  const duplicate = seen.has(el.id);
              //   seen.add(el.id);
              //   return !duplicate;                
              // });
              // console.log(this.gerempDetails);
              this.mergedData.push(obj3);
              // console.log(this.mergedData); 
              this.totalsal = obj3.basic + 
                              obj3.hra + 
                              obj3.lta + 
                              obj3.splallowence +
                              obj3.foodAllowence
              
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
         
          // this.mergedData.push(ress)
          // const seen = new Set();
          //     this.mergedData = this.mergedData.filter(el => {
          //      const duplicate = seen.has(el.id);
          //       seen.add(el.id);
          //       return !duplicate;                
          //     });
          //     this.mergedData.find((rrr:any)=>{
          //       if(rrr.basic != null && rrr.basic !=undefined){
          //         this.totalsal = rrr.basic + 
          //                         rrr.hra + 
          //                         rrr.lta + 
          //                         rrr.splallowence +
          //                         rrr.foodAllowence
          //           if(10000 < this.totalsal && this.totalsal < 300000){
          //             this.totalsal= this.totalsal*15/100
          //           }else if(30001 < this.totalsal && this.totalsal < 700000){
          //             this.totalsal= this.totalsal*25/100
          //           }else if(700001 < this.totalsal && this.totalsal < 1200000){
          //             this.totalsal= this.totalsal*30/100
          //           }else if(1200001 < this.totalsal && this.totalsal < 1600000){
          //             this.totalsal= this.totalsal*35/100
          //           }else if( this.totalsal > 1600001){
          //             this.totalsal= this.totalsal*40/100
          //           }
          //           rrr.ee=this.totalsal 
                  
          //       }else{
          //         rrr.ee;
          //       }
               
               
          //       console.log(rrr.ee);
                
          //     })
             
          // console.log(this.mergedData);
          
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
    console.log(this.addsalerydata.value);
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
