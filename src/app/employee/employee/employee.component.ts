import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import {MessageService,ConfirmationService} from 'primeng/api';
import {NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  constructor(
    private _serv:ProductService,
    private messageService:MessageService,
    private confirmationService: ConfirmationService,
    private http:HttpClient
    ){

  }
  allUserData:any;
  balanceFrozen: boolean = true;
  displayMaximizable:boolean=false;
  value2: string;
  id:any
  fname:any;
  username:any;
  email:any;
  phone:any;

  updatesingleuserData:any[]=[]
  
  _userDetailsData="http://localhost:3000/allUserData/"

  userUpdateForm=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      username:new FormControl(''),
      email:new  FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone:new FormControl('') 
  })
  

  getallUsersData(){
    this._serv.getAlluserData().subscribe(item=>{       
     this.allUserData=item
    //  console.log(this.allUserData);
    })
  }
  deleteuserselctdid(row){ 

    this.confirmationService.confirm({
      message: 'Are you sure   you want to Delete this Item ?',
            accept: () => {
              this._serv.deleteuserdata(row); 
              this.messageService.add({severity:'info', summary:'Item Deleted', detail:'Via MessageService'});         
              this. getallUsersData()
            } 
    })
   
  }
  edituserData(row){ 
    const rrr=row 
    this.updatesingleuserData=[] 
   const currentData= this.allUserData.find((aa)=>{
      return aa.id === row 
    })
    console.log(currentData);    
    this.userUpdateForm.value.id = currentData.id
    this.userUpdateForm.value.name = currentData.name
    this.id=currentData.id;
    this.fname= currentData.name;
    this.email=currentData.email;
    this.username=currentData.username;
    this.phone=currentData.phone;
    

    console.log(this.userUpdateForm.value.id);
    console.log(this.userUpdateForm.value.name);
    console.log(this.id);
    
    
    this.displayMaximizable=true
  }

  updateformuserdata( ){
    console.log(this.userUpdateForm.value);
   
    this.http.put(this._userDetailsData + this.userUpdateForm.value.id,this.userUpdateForm.value).subscribe(data=>{
      console.log(data);
      
    },error=>{
      console.log("error");
      
    })
    this.userUpdateForm.reset()
    this.displayMaximizable=false
  }
  
  ngOnInit(): void {
    this.getallUsersData();
    
  }
}
