import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component'; 
import {MessageService,ConfirmationService} from 'primeng/api'; 
import { SharedModule } from 'src/app/sharedModule.module';
@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    // TableModule,
    // ButtonModule,
    // ConfirmDialogModule,
    // ToastModule,
    // DialogModule,
    // InputTextModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule
  ],
  providers: [MessageService, ConfirmationService ]
})
export class EmployeeModule { }
