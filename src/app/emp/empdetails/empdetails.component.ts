import { Component, IterableDiffers, OnInit } from '@angular/core';
import { EmpdetailsService } from '../empdetails.service';

import { MessageService, ConfirmationService } from 'primeng/api';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmitDataService } from 'src/app/student/student/emitCartService';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {

  constructor(
    private _serv: EmpdetailsService,
    private http: HttpClient,
    private messageservice: MessageService,
    private confirmationService: ConfirmationService,
    private EmitDataService: EmitDataService
  ) { }

  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  year = this.date.getFullYear();
  todayDate = `${this.day}/${this.month}/${this.year}`;

  noOfDays: any;

  newTotaladta: any;
  newredData: any[] = [];
  newgreenData: any[] = [];
  balanceFrozen: boolean = true;
  displayMaximizable: boolean = false;
  selectedValues: any;
  fname:any;

  addempdatadata = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mname: new FormControl('', [Validators.minLength(1)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    empid: new FormControl('', [Validators.required, Validators.minLength(4)]),
    gender: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required, Validators.minLength(4)]),
    dob: new FormControl('', [Validators.required, Validators.minLength(4)]),
    dateofjoining: new FormControl('', [Validators.required, Validators.minLength(4)]),
    myItems: new FormControl([], [Validators.required])
  })

  cities = ["developer", "designer", "tester"];
  openaddstdntpopup() {
    this.displayMaximizable = true;
  }

  checkvalue: any[] = []

  displayEmpData() {
    this.noOfDays;
    this.newredData = [];
    this.newgreenData = [];
    this._serv.getempdetails().subscribe((res: any) => {
      res.filter((aa: any) => {
        console.log(aa);
        
        const ss = new Date(aa.dateofjoining);
        var date_diff_indays = function (date1: any, date2: any) {
          const dt1 = new Date(date1);
          const dt2 = new Date(date2);
          return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
        }
        this.noOfDays = date_diff_indays(ss, new Date())
        if (this.noOfDays > 30) {
          aa.probation = "completed";
        } else {
          aa.probation = "in Completed"; 
        }

        if (aa.probation === "in Completed") {
          this.newredData.push(aa)
        }
      })
      res.filter((bb: any) => {
        if (bb.probation !== "in Completed") {
          this.newgreenData.push(bb)
        }
      })
      this.newTotaladta = this.newredData.concat(this.newgreenData)
    })
  }

  onchange(event) {
    if (event.target.checked) {
      this.checkvalue.push(event.target.value)
      this.addempdatadata.value.myItems = this.checkvalue;
    } else {
      let index = this.checkvalue.indexOf(event.target.value);
      this.checkvalue.splice(index, 1);
      this.addempdatadata.value.myItems = this.checkvalue;
    }
  }

  empaddeddata(id: any) {
    if (this.addempdatadata.value.myItems.length > 0) {
      this.addempdatadata.value.myItems = [...new Set(this.addempdatadata.value.myItems)];
    }
    this.confirmationService.confirm({
      message: 'Are you sure you want to Add this Item ?',
      accept: () => {
        this._serv.postemdData(this.addempdatadata.value).subscribe((data)=>{
          this.messageservice.add({severity:'success', summary:'Data Added Successfully', detail:'Via MessageService'});
        })
        this.addempdatadata.reset()
        this.displayMaximizable = false;
        this.displayEmpData();
      }
    })
  }

  deletetablerow(id: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Delete this Item ?',
      accept: () => {
        this._serv.deleteempData(id).subscribe((data)=>{
          this.messageservice.add({severity:'info', summary:'Data Deleted Successfully', detail:'Via MessageService'});
        });
        this.displayEmpData();
      }
    })
  }

  ngOnInit(): void {
    this.displayEmpData();
    this.EmitDataService.clicked(false)
  }
 
}
