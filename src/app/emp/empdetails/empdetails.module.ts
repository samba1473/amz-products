import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpdetailsRoutingModule } from './empdetails-routing.module';
import { EmpdetailsComponent } from './empdetails.component'; 
import { SharedModule } from 'src/app/sharedModule.module';
@NgModule({
  declarations: [
    EmpdetailsComponent
  ],
  imports: [
    CommonModule,  
    EmpdetailsRoutingModule, 
    SharedModule,
  ]
})
export class EmpdetailsModule { }
