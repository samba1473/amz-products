import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
userData:any[]=[];
balanceFrozen: boolean = true;
  constructor(private _userServ:UserService){}

  gerUserData(){
    this._userServ.getuserdata().subscribe((res:any)=>{
      this.userData=res        
    })
  }
  ngOnInit(): void {
    this.gerUserData();         
  }
}
