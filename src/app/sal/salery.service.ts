import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleryService {

  constructor(private http:HttpClient) { }
  private _salDetails="http://localhost:3000/saleryDetails/";
  private _updatesalserydetails="http://localhost:3000/updateedSaleryDetails/"
  
  getsalEmpDetails(){
    return this.http.get(this._salDetails)
  }
  postupdatedSaleryDetails(id){
    return this.http.post(this._updatesalserydetails,id)
  }
 getTotalsaleryVal(){
    return this.http.get(this._updatesalserydetails)
  }
  get
  
}
