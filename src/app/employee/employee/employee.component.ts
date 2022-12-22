import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import {MessageService,ConfirmationService} from 'primeng/api';
import {NgForm} from '@angular/forms';
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

  updatesingleuserData:any[]=[]
  
  _userDetailsData="http://localhost:3000/allUserData/"

  updateUserData=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      username:new FormControl(''),
      email:new  FormControl(''),
      phone:new FormControl('') 
  })
  id:any;

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
    // this.http.get<any>(this._userDetailsData).subscribe((res)=>{
    //   res.filter((ee)=>{        
    //     if(ee.id === rrr){  
    //       this.updatesingleuserData.push(ee);        
    //     }
    //   })
    // })
   const currentData= this.allUserData.find((aa)=>{
      return aa.id === row
    })
    console.log(currentData);
    
    this.displayMaximizable=true
  }

  updateformuserdata(){
    console.log(this.updateUserData.value);
    
  }
  
  ngOnInit(): void {
    this.getallUsersData();
    
  }
}
