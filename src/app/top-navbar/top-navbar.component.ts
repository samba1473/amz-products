import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit{

  constructor(private rout:Router, private _productServ:ProductService){}
  @Input() totalAddeedItems:any;
  brandName:any;

  showselectedData(){
    this.rout.navigate(["home/selectedProduct"])
    console.log("click");
    
  }
  
  ngOnInit(): void {
    this.brandName= this._productServ.brandName    
     
  }
}
