import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{
  constructor(private _serv:StudentService, private http:HttpClient){}

  studentData:any;
  balanceFrozen: boolean = true;
  value: boolean=true;
  selectedValues: string[] = [];
  displayMaximizable:boolean=false;
 genders:any;
 nameee:any;
 
  adduserdata=new FormGroup({ 
    // id:new FormControl('',[Validators.required]),
    Name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Gender:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Class:new FormControl('',[Validators.required]),
    Seat:new FormControl('',[Validators.required]),
    Eyes:new FormControl('',[Validators.required,Validators.minLength(4)]),
    ScheduleTime:new FormControl('',[Validators.required,Validators.minLength(4)]),
    ScheduleDestination:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  getStudentdata(){
    this._serv.getstudentData().subscribe(data=>{
     this.studentData = data
      console.log(this.studentData);
      
    })
  }
 openaddstdntpopup(){ 
    this.displayMaximizable=true;
  }
  addstudentdata(e:any){
    console.log(this.adduserdata.value); 
    if(this.adduserdata.value.Gender === "Male"){
      this.adduserdata.value.Gender = "0" 
          
    }else{
      this.adduserdata.value.Gender = "1"; 
    }
      this.http.post("http://localhost:3000/studentsData",this.adduserdata.value).subscribe(data=>{
            console.log(data);      
          },
          error=>{
            console.log("error");
            
      })
    
   
    this.adduserdata.reset()  
    this.displayMaximizable=false;
    this.getStudentdata() 
    
  }
  deletestudentData(id){ 
    this.http.delete("http://localhost:3000/studentsData/" + id).subscribe( )
    this.getStudentdata()  
  }

  ngOnInit(): void {
    this.getStudentdata()
    
  }
}
