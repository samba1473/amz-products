import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';  
import { AddedItemsComponent } from './added-items/added-items.component';  
import { TopNavbarComponent } from './top-navbar/top-navbar.component';    
import { SharedModule } from './sharedModule.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    AddedItemsComponent,
    TopNavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
