import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

 private  _studentData="http://localhost:3000/studentsData/";

  getstudentData(){
    return this.http.get(this._studentData)
  }
  deletestudentData(id){
    return this.http.delete(this._studentData+id)
  }
  poststudentdata(data){
    return this.http.post(this._studentData,data);
  }
  editstudentdata(id,data){
    return this.http.put(this._studentData+ id, data)
  }
}
