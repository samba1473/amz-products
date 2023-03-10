import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { EmitDataService } from '../student/student/emitCartService'
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit{

  constructor(private rout:Router, private _productServ:ProductService, private http:HttpClient, private EmitDataService: EmitDataService){}
  @Input() totalAddeedItems:any;
  @Input() hideCart:boolean;
 
  brandName:any;
  firstName:any;
  lastName:any;
  showselectedData(){
    this.rout.navigate(["home/selectedProduct"])
    // console.log("click");    
  }
  
  items = [
    {label: 'View Profile', icon: 'pi pi-fw pi-user'},
    {label: 'Log Out', icon: 'pi pi-fw pi-power-off'},
    {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
];


  ngOnInit(): void {
    this.brandName= this._productServ.brandName    

    this.http.get<any>("http://localhost:3000/userDetails").subscribe(res=>{
      res.find((a:any)=>{
        if( a.email === localStorage.getItem("email") && a.password === localStorage.getItem("pwd")){
           this.firstName=a.fname.charAt(0) ;
           this.lastName= a.lname.charAt(0);
        }
      });
  })
    this.EmitDataService.clickEvent.subscribe(hide =>{
      this.hideCart = hide;
    })
  }
}
