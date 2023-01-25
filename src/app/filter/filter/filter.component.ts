import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { EmitDataService } from 'src/app/student/student/emitCartService';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent  implements OnInit{

  filterData:any;
  inputstartDate="6/24/2022"
  inputendDate="12/3/2022"
  inputStartDate: Date;
  inputEndDate:Date;
  comingData:any[]=[];
  tableshow:boolean=false;
  cities: City[];

  selectedCity: City;

  constructor(private _Serv:FilterService,     private EmitDataService: EmitDataService
    ){
    this.cities = [
      {name: 'All' },
      {name: 'Pass'},
      {name: 'Fail'} 
  ];
  }


  
  filterFormData = new FormGroup({
    inputstartDate: new FormControl(new Date, [Validators.required]),
    inputendDate: new FormControl(new Date, [Validators.required]),
    inputselectDrpdwn:new FormControl('',[Validators.required])
  })
  inputfilteData(id){
    
  }

  // getFilterData(){
  //   this._Serv.getfilterData().subscribe(data=>{
  //     this.filterData=data
  //   })
  // }
  getFilterData(){    
    this.comingData =[];
    this._Serv.getfilterData().subscribe((data)=>{
      
      this.filterData  = data;

      this.filterData.filter((item:any)=>{ 
        // const inputstartDate= new Date( this.inputstartDate) 
        const apistartDate = new Date(item.stsrtdate)
        // const inputendDate= new Date(this.inputendDate)
        const apiendDate=new Date(item.endDate) ; 

        if(apistartDate >= this.filterFormData.value.inputstartDate && this.filterFormData.value.inputendDate  <=  apiendDate && this.filterFormData.value.inputselectDrpdwn == item.status){           
          this.comingData.push(item)
        }
        else if(apistartDate >= this.filterFormData.value.inputstartDate && this.filterFormData.value.inputendDate  <=  apiendDate && this.filterFormData.value.inputselectDrpdwn == "All"){          
          this.comingData.push(item)
        }
        
      }) 
      this.filterData=this.comingData
     if(this.filterData.length > 0){
      this.tableshow=true

     }
    })
    
  }
  ngOnInit(): void {
    this.EmitDataService.clicked(false)
    
  }
}

interface City {
  name: string
}