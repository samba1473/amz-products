import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  totalSelectedItems:any;
  constructor(private _productServ:ProductService){

  }
  ngOnInit(): void {
       //console.log(this._productServ.totalAddedItems)
       this._productServ.addselectedData().subscribe(item=>{
        this.totalSelectedItems=item.length
       })
  }
  ngAfterViewInit(): void { 
    
  }
}
