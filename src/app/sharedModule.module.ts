import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
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
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table'; 
import { CommonModule } from '@angular/common';

@NgModule({
 imports:      [ 
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
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
    TableModule
],
 declarations: [ 
    
  ],
 exports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,  
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
    TableModule

],
providers: [
    MessageService,
    ConfirmationService,    
]
})
export class SharedModule { }