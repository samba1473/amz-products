import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component , DoCheck, OnInit,  } from '@angular/core';
import { ProductService } from '../product.service';
import { EmitDataService } from '../student/student/emitCartService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit,AfterViewInit,DoCheck ,AfterContentChecked,AfterViewChecked {
  totalSelectedItems:any;
  hideCart:boolean = true;
  constructor(private _productServ:ProductService, private EmitDataService:EmitDataService){

  } 
  ngOnInit(): void {
      //  console.log(this._productServ.totalAddedItems)        
       setInterval(()=>{
        this._productServ.addselectedData().subscribe(item=>{
          this.totalSelectedItems=item.length
         })
       },2000)
         this.EmitDataService.clicked(true)
  }


  menuLinkActive(){
    this.hideCart=true;
    this.EmitDataService.clicked(true)
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
