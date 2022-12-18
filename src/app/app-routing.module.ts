import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddedItemsComponent } from './added-items/added-items.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,
  children: [ 
    {path:'',component:ProductsComponent},
    {path:'products',component:ProductsComponent},
    {path:'selectedProduct', component: AddedItemsComponent}
  ]
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }