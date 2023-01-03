import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';  
import { MessageService } from 'primeng/api'; 
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GalleriaModule} from 'primeng/galleria';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {SkeletonModule} from 'primeng/skeleton';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import {KeyFilterModule} from 'primeng/keyfilter';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CarouselModule} from 'primeng/carousel';
import {ToolbarModule} from 'primeng/toolbar'; 
import {RatingModule} from 'primeng/rating';  
import { CommonModule } from '@angular/common'; 
import { CalendarModule } from './components/calender/calender';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton'; 
import { TableModule } from './components/table/table';
import { DialogModule } from './components/dialog/dialog';
import { PaginatorModule } from './components/paginator/paginator';
import { ToastModule } from './components/toast/toast';
@NgModule({
 imports:      [ 
    CommonModule, 
  
    FormsModule,
    ReactiveFormsModule ,
 
    NgbModule,
    ButtonModule,  
    ConfirmDialogModule,
    GalleriaModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    SkeletonModule,
    PasswordModule,
    DividerModule,
    KeyFilterModule,
    CascadeSelectModule,
    CarouselModule,
    ToolbarModule,
    RatingModule,  
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    DialogModule,
    PaginatorModule,
    ToastModule
],
 declarations: [ 
    
  ],
 exports:      [ 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    GalleriaModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    SkeletonModule,
    PasswordModule,
    DividerModule,
    KeyFilterModule,
    CascadeSelectModule,
    CarouselModule,
    ToolbarModule,
    RatingModule,
    PaginatorModule,
    TableModule,
    RadioButtonModule,
    CheckboxModule, 
    CalendarModule
],
providers: [
    MessageService,
    ConfirmationService,    
]
})
export class SharedModule { }