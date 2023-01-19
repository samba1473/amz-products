import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MessageService,ConfirmationService} from 'primeng/api';
import { TopNavbarComponent } from 'src/app/top-navbar/top-navbar.component';
import { EmitDataService } from './emitCartService'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [TopNavbarComponent]
})
export class StudentComponent implements OnInit{
  constructor(
    private _serv:StudentService,
    private http:HttpClient,
    private messageservice:MessageService,
    private confirmationService: ConfirmationService,
    private EmitDataService: EmitDataService

    ){}

    val:any;
  studentData:any;
  balanceFrozen: boolean = true;
  value: boolean=true;
  selectedValues: string[] = [];
  displayMaximizable:boolean=false;
  updateForm:boolean=false;
  genders:any;
  nameee:any;
  openstudentpopup:boolean=false;
 //edited data
 id:any;
 name:any;
 class:any;
 seat:any;
 eyes:any;
 scheduletime:any;
 scheduledestination:any;
 male:any;
 female:any;


  adduserdata=new FormGroup({ 
    // id:new FormControl('',[Validators.required]),
    Name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Gender:new FormControl('',[Validators.required,]),
    Class:new FormControl('',[Validators.required]),
    Seat:new FormControl('',[Validators.required]),
    Eyes:new FormControl('',[Validators.required]),
    ScheduleTime:new FormControl('',[Validators.required,Validators.minLength(4)]),
    ScheduleDestination:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  edituserdata=new FormGroup({ 
    id:new FormControl('',[Validators.required]),
    Name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Gender:new FormControl('',[Validators.required,]),
    Class:new FormControl('',[Validators.required,Validators.minLength(1)]),
    Seat:new FormControl('',[Validators.required,Validators.minLength(1)]),
    Eyes:new FormControl('',[Validators.required,Validators.minLength(1)]),
    ScheduleTime:new FormControl('',[Validators.required,Validators.minLength(4)]),
    ScheduleDestination:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  getStudentdata(){
    this._serv.getstudentData().subscribe(data=>{
     this.studentData = data ;  

     this.studentData = this.studentData.sort(
      (p1, p2) => (p1.Class < p2.Class) ? 1 : (p1.Class > p2.Class) ? -1 : 0);
      
      //   this.studentData = this.studentData.sort(
      // (p1, p2) => (p1.Gender < p2.Gender) ? 1 : (p1.Gender > p2.Gender) ? -1 : 0);
      // console.log(this.studentData);
    })
  }

 openaddstdntpopup(){ 
    this.displayMaximizable=true;
    this.openstudentpopup=false;
  }
  openupdatestdntpopup(id:any){
    this.displayMaximizable=true;
    this.openstudentpopup=true;
    const currentData= this.studentData
    .find((aa:any)=>{
      return aa.id === id   
    })  

    this.id=currentData.id;
    this.name=currentData.Name;
    this.class=currentData.Class;
    this.seat=currentData.Seat;
    this.eyes=currentData.Eyes;
    this.scheduletime=currentData.ScheduleTime;
    this.scheduledestination=currentData.ScheduleDestination;

      if(currentData.Gender === "0"){
          this.male="Male"       
      }else if(currentData.Gender ==="1"){
        this.female = "Female" 
      }
  }

addstudentdata(e:any){  
      console.log(this.adduserdata.value); 
      if(this.adduserdata.value.Gender === "Male"){
        this.adduserdata.value.Gender = "0" 
            
      }else{
        this.adduserdata.value.Gender = "1"; 
      }        

      this.confirmationService.confirm({
        message: 'Are you sure   you want to Add this Item ?',
              accept: () => {
                this._serv.poststudentdata(this.adduserdata.value).subscribe((data)=>{
                  this.messageservice.add({severity:'success', summary:'Data Added Successfully', detail:'Via MessageService'});    
                },
                  error=>{
                    console.log("error");
                  })
                this.adduserdata.reset()  
                this.displayMaximizable=false;
                this.getStudentdata()
              } 
    })
  
}

deletestudentData(id){
    this.confirmationService.confirm({
      message: 'Are you sure   you want to Delete this Item ?',
            accept: () => { 
              this._serv.deletestudentData(id).subscribe()
              this.messageservice.add({severity:'info', summary:'Data Deleted Successfully', detail:'Via MessageService'});   
              this.getStudentdata()
            } 
    })
}
editstudentdata(e:any){
  
    if(this.edituserdata.value.Gender === "Male"){
      this.edituserdata.value.Gender = "0"           
    }else{
      this.edituserdata.value.Gender = "1"; 
    }
    
      this.confirmationService.confirm({
        message: 'Are you sure you want to Update this Item ?',
              accept: () => { 
                this._serv.editstudentdata(this.edituserdata.value.id,this.edituserdata.value).subscribe((data)=>{
                  this.messageservice.add({severity:'success', summary:'Data Updated Successfully', detail:'Via MessageService'});   
                },error=>{
                  console.log("error");
                })
                this.edituserdata.reset()
                this.displayMaximizable=false;
                this.getStudentdata()
              } 
      })
}

checkBoxId:boolean=false;
checkValue(id,event: any){
    console.log(id);
    console.log(event);
    this.checkBoxId=event
    console.log(this.checkBoxId);
}

ngOnInit(): void {
    this.EmitDataService.clicked(false)
    this.getStudentdata()    
}
}
