import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-added-items',
  templateUrl: './added-items.component.html',
  styleUrls: ['./added-items.component.scss']
})
export class AddedItemsComponent implements OnInit,AfterViewInit{
  constructor(
    private _selecteddata:ProductService,
    private messageService:MessageService
  ){}

  showData:any[]=[];
  noData:any;
  totalItems:any;
  showselectedData(){
    this._selecteddata.addselectedData().subscribe(
      show=>{
        if(show.length > 0 ){          
          this.showData=show;
          this.totalItems=show.length; 
        }else{
          this.noData="There is No Selected  Data"
        }
       
        // console.log(show.length)
      }
    )
  }
  deleteItem(data:any){
    const UserId = data.target.id;       
    this._selecteddata.deleteSelectedData(UserId);                
     this.messageService.add({severity:'info', summary:'Service Message', detail:'Via MessageService'});

    this.showselectedData();
  }
ngOnInit(): void {
  this.showselectedData();
 
  
}
ngAfterViewInit(): void {
  
}
}
