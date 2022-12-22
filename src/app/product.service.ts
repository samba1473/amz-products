import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedData:any;
  brandName:any="ALL PRODUCTS"
  constructor(private http:HttpClient) { }

  private _url="http://localhost:3000/products/";
  private _selectItems="http://localhost:3000/selectedItems/";
  private _allUserDetails="http://localhost:3000/allUserData/";

  totalAddedItems:any;

  gaeProductData():Observable<any>{
    return this.http.get<any>(this._url)
  }
  addselectedData( ){
    return this.http.get<any>(this._selectItems)
  }
  deleteSelectedData(row:any){
    return this.http.delete(this._selectItems+row).subscribe( )
  }
  getAlluserData(){
    return this.http.get(this._allUserDetails);
  }
  deleteuserdata(id){
    return this.http.delete(this._allUserDetails+id).subscribe( );
  }
  // edituserdata(id){
  //   return this.http.post(this._allUserDetails + id).subscribe(res=>{
  //     console.log(res);
      
  //   })
  // }
}
