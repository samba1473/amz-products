import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleryComponent } from './salery.component';

const routes: Routes = [
  {path:'',component:SaleryComponent},
  {path:'salery',component:SaleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleryRoutingModule { }
