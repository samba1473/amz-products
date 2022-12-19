import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService,ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private route:Router, private http:HttpClient, private messageService:MessageService,){}

  slidePosition:boolean=false; 

loginslide(){
  this.slidePosition=true;
}
registerSlide(){
  this.slidePosition=false
}


loginform=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})

regForm=new FormGroup({
  fname:new FormControl(''),
  lname:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
  mobile:new FormControl(''),
  status:new FormControl(''),  
})

loginsubmit(){
  console.log(this.loginform.value);
  console.log(this.loginform.value.email);
  console.log(this.loginform.value.password);
  this.http.get<any>("http://localhost:3000/userDetails").subscribe(
    data=>{
        const user= data.find((a:any)=>{
          return a.email === this.loginform.value.email && a.password === this.loginform.value.password
        })
        if(user){
          localStorage.setItem("email",this.loginform.value["email"]);
          localStorage.setItem("pwd",this.loginform.value["pwd"]);
          this.route.navigate(["home"]) 
          this.messageService.add({severity:'success', summary:'User Login Successfully', detail:'Via MessageService'});
        
          this.loginform.reset();
          
        }else{
          this.messageService.add({severity:'error', summary:'User Details Incorrect', detail:'Via MessageService'});
        }
    }
  ) 
}

regformSubmit(){
  console.log(this.regForm.value);
  // this.regForm.reset()
  if(this.regForm.invalid ){
    return alert("please Enter Mandatory Fields")
  }else{
    this.http.post("http://localhost:3000/userDetails",this.regForm.value).subscribe(
      data=>{ 
        this.regForm.reset();
        this.messageService.add({severity:'success', summary:'User data Added Successfully', detail:'Via MessageService'});
        this.slidePosition=false;
      },
      error=>{
        console.log('Error', error);
        this.messageService.add({severity:'error', summary:'Please Fill mandatory Fields', detail:'Via MessageService'});
      }
    )
  }

}

routetoHome(){
  this.route.navigate(['/home'])
}
}
