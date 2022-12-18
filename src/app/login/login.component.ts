import { Component } from '@angular/core';
import { FormControl,FormControlName,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private route:Router){}

  slidePosition:boolean=false;

loginslide(){
  this.slidePosition=true;
}
registerSlide(){
  this.slidePosition=false
}


loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})

regForm=new FormGroup({
  fname:new FormControl(''),
  lname:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl('')
})

loginsubmit(){
  console.log(this.loginForm.value)

  this.loginForm.reset()
}

regformSubmit(){
  console.log(this.regForm.value);

  this.regForm.reset()
}

routetoHome(){
  this.route.navigate(['/home'])
}
}
