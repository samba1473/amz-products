import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import {MessageService,ConfirmationService} from 'primeng/api';
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
    ){

  }
  allUserData:any;
  balanceFrozen: boolean = true;
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
    console.log(row);
    
  }

  
  ngOnInit(): void {
    this.getallUsersData()
  }
}
