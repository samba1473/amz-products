import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(
    private fb: FormBuilder, 
    private _productSerc:ProductService, 
    private http:HttpClient, 
    private messageService: MessageService,
    public rout:Router
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

  productsData:any[]=[]; 
  cities: any[]=[];  
  myForm: FormGroup; 
  brandName=" All Products";
  date=new Date(); 
  duplicate:any;
  UserId: any;
  addedData:any[]=[];
  displayMaximizable: boolean=false;
  _selectedDataUrl="http://localhost:3000/selectedItems"

  getProductData(){
    this._productSerc.gaeProductData().subscribe(res=>{
      this.productsData=res;
    })
  }
  filtersearch(){
    console.log(this.myForm.value);   
  }  
    
  valueSelected(){
    this.productsData =[];
    this._productSerc.gaeProductData().subscribe((res: any[])=>{     
      res.filter(item=>{
        // console.log('item >>> ',item)
          if( item.category === this.myForm.value.filterProduct)
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
          }else if(this.myForm.value.filterProduct === 'All Products'){
            this.productsData.push(item);           
          }
      }) 
       
    })   
    this.brandName=this.myForm.value.filterProduct
  }




  addData(event:any)
  {
    	this.UserId = event.target.id;
    //  console.log(this.UserId);
     this._productSerc.gaeProductData().subscribe(res=>{
      res.find((ee:any)=>{
        if(this.UserId == ee.id ){
          // console.log("datata",this.UserId);
          // this.addedData.push(ee);
          this.http.post(this._selectedDataUrl,ee).subscribe(
            data=>{               
              this.messageService.add({severity:'success', summary:'Item Added Successfully', detail:'Via MessageService'});
            },
            error=>{
              this.messageService.add({severity:'error', summary:'This item Already Added', detail:'Via MessageService'});
            }
          )

          // this._productSerc.selectedData=this.addedData;
          // const seen = new Set();
          //     this.addedData = this.addedData.filter(el => {
          //       this.duplicate = seen.has(el.id);
          //       seen.add(el.id);
          //       return !this.duplicate;               
          //     }); 

              // console.log(this.addedData);
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
  this.rout.navigate(["selectedProduct"])
}
  
  ngOnInit(): void {
    this.getProductData(); 
    // this. valueSelected()
  }

}
