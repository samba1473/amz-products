import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleryRoutingModule } from './salery-routing.module';
import { SaleryComponent } from './salery.component';
import { SharedModule } from 'src/app/sharedModule.module';


@NgModule({
  declarations: [
    SaleryComponent
  ],
  imports: [
    CommonModule,
    SaleryRoutingModule,
    SharedModule
  ]
})
export class SaleryModule { }
