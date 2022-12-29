import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpdetailsRoutingModule } from './empdetails-routing.module';
import { EmpdetailsComponent } from './empdetails.component';
import { CheckboxModule} from 'primeng/checkbox';  
import { SharedModule } from 'src/app/sharedModule.module';

@NgModule({
  declarations: [
    EmpdetailsComponent
  ],
  imports: [
    CommonModule,  
    EmpdetailsRoutingModule,
    CheckboxModule,
    SharedModule
  ]
})
export class EmpdetailsModule { }
