import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MessageService,ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-added-items',
  templateUrl: './added-items.component.html',
  styleUrls: ['./added-items.component.scss']
})
export class AddedItemsComponent implements OnInit,AfterViewInit{
  constructor(
    private _selecteddata:ProductService,
    private messageService:MessageService,
    private confirmationService: ConfirmationService,

  ){}

  showData:any[]=[];
  noData:any;
  totalItems:any;
  show:boolean=false;

  showselectedData(){
    this._selecteddata.addselectedData().subscribe(
      show=>{
        if(show.length > 0 ){          
          this.showData=show;
          this.totalItems = show.length; 
          this.show=true;
        }else{
          this.noData="There is No Selected  Data"
          this.show=false;
        }       
        // console.log(show.length)
      }
    )
  }
  
  deleteItem(data:any){
    const UserId = data.target.id;
    this.confirmationService.confirm({
      message: 'Are you sure   you want to Delete this Item ?',
            accept: () => {
              this._selecteddata.deleteSelectedData(UserId);
              this.messageService.add({severity:'info', summary:'Item Deleted', detail:'Via MessageService'});         
             this.showselectedData();
            }
    })
  }
ngOnInit(): void {
  this.showselectedData();  
}

ngAfterViewInit(): void {
  
}
}
