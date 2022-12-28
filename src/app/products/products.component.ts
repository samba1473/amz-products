import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit ,DoCheck {

  constructor(
    private fb: FormBuilder, 
    private _productSerc:ProductService, 
    private http:HttpClient, 
    private messageService: MessageService,
    public rout:Router,
    private confirmationService: ConfirmationService
    ) {
    this.cities = [
      {name: 'All Products'},
      {name: 'smartphones'},
      {name: 'laptops'},
      {name: 'fragrances'},
      {name: 'skincare'},
      {name:'groceries'},
      {name:'home-decoration'}
  ];


  this.myForm = this.fb.group({
    filterProduct: ['']
  })
  }
  selectedCity: any;
  productsData:any[]=[]; 
  cities: any[]=[];  
  myForm: FormGroup; 
  brandName="All Products";
  date=new Date(); 
  duplicate:any;
  UserId: any;
  viewMoreId:any;
  addedData:any[]=[];
  highlitedData:any[]=[];
  displayMaximizable: boolean=false;
  _selectedDataUrl="http://localhost:3000/selectedItems/";
  loadSkeleton: boolean = false;

  responsiveOptions2:any[] = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  async getProductData(){
    await this._productSerc.gaeProductData().subscribe(res=>{
      this.productsData=res;
    })
   // this.loadSkeleton = false;
  }
  filtersearch(){
    console.log(this.myForm.value);   
  }
      
  valueSelected(){
    console.log("helllo samba");
    // console.log(this.myForm.value)
    this.productsData =[];
    this.loadSkeleton=true;
    this._productSerc.gaeProductData().subscribe((res: any[])=>{     
      res.filter(item=>{         
          if( item.category === this.myForm.value.filterProduct.name)
          {
            
              this.productsData.push(item);
              // this.productsData = this.productsData.reduce((acc, current) => {
              //   const x = acc.find(item => item.id === current.id);
              //   if (!x) {
              //     return acc.concat([current]);
              //   } else {
              //     return acc;
              //   }
              // }, []);
              
              const seen = new Set();
              this.productsData = this.productsData.filter(el => {
                this.duplicate = seen.has(el.id);
                seen.add(el.id);
                // this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
                return !this.duplicate;
                
              }); 
              this.loadSkeleton=false;
          }else if(this.myForm.value.filterProduct.name === 'All Products'){
            this.loadSkeleton= true;
            this.productsData.push(item);  
            this.loadSkeleton=false;         
          }          
      })       
    })   
    this.brandName=this.myForm.value.filterProduct.name;
    this._productSerc.brandName=this.brandName; 
    
  }

 

  addData(id)  {
    	this.UserId = id; 
     this._productSerc.gaeProductData().subscribe(res=>{
      res.find((ee:any)=>{ 
        if(this.UserId == ee.id ){
            this.confirmationService.confirm({
              message: 'Are you sure   you want to Add this Item ?',
              accept: () => {
                this.http.post(this._selectedDataUrl,ee).subscribe(
                  data=>{ 
                    this.messageService.add({severity:'success', summary:'Item Added Successfully', detail:'Via MessageService'});
                  },
                  error=>{
                    this.messageService.add({severity:'error', summary:'This item Already Added', detail:'Via MessageService'});
                  }
                )
                this.displayMaximizable=false;
              }
            }); 
        }
      })
     })
     
  }
  showMaximizableDialog() {
    // console.log(this.addedData.length);
    // if(this.addedData.length > 0){
    //   this.displayMaximizable = true;
    // }else{
    //   this.displayMaximizable = false;
    //   alert("Please select Atleast One Item")
    // }  
   
}
showselectedData(){
  this.rout.navigate(["home/selectedProduct"])
}
viewMoreData(event:any){  
  this.displayMaximizable=true;
  this.viewMoreId = event.target.id; 
  this.highlitedData=[]
  // console.log(this.viewMoreId);
  this._productSerc.gaeProductData().subscribe(res=>{
    res.find((dd:any)=>{
      if(dd.id == this.viewMoreId){
        this.highlitedData.push(dd);
        console.log(this.highlitedData);        
      }
    })
  })
  
}
  async ngOnInit() {
    this.loadSkeleton=true
    await this.getProductData();   
    
  }
  ngDoCheck(): void { 
  }
 
}
