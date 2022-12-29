import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private _url="http://localhost:3000/userdata"
  constructor(private http:HttpClient) { }
  
   getuserdata(){
    return this.http.get(this._url)
   }
}
