import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpdetailsService {

  constructor(private http:HttpClient) { }

  private _url="http://localhost:3000/empDetails/";

    getempdetails(){
      return this.http.get(this._url)   
    }
    postemdData(id:any){
      return this.http.post(this._url,id)
    }
    deleteempData(id:any){
      return this.http.delete(this._url+id)
    }

}
