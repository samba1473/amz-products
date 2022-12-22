import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext'; 
import {CalendarModule} from 'primeng/calendar';  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    CheckboxModule, 
    DialogModule,
    RadioButtonModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule, 
  ],

})
export class StudentModule { }
