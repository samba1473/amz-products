import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component , DoCheck, OnInit,  } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit,AfterViewInit,DoCheck ,AfterContentChecked,AfterViewChecked {
  totalSelectedItems:any;
  constructor(private _productServ:ProductService){

  }
  ngOnInit(): void {
       console.log(this._productServ.totalAddedItems)
       
       setInterval(()=>{
        this._productServ.addselectedData().subscribe(item=>{
          this.totalSelectedItems=item.length
         })
       },2000)
  }
  ngAfterViewInit(): void { 
   
  }
  ngDoCheck(){     
   
  }
  ngAfterContentChecked(){
  
  }
  ngAfterViewChecked(){
   
  }
}
