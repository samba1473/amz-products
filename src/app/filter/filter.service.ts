import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }
  private _URL="http://localhost:3000/FilteredDateApi/";

  getfilterData(){
    return this.http.get(this._URL)
  }
}
