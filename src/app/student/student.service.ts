import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  _studentData="http://localhost:3000/studentsData";

  getstudentData(){
    return this.http.get(this._studentData)
  }
}
