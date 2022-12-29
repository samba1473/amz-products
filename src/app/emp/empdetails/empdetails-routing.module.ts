import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from 'src/app/employee/employee/employee.component';
import { EmpdetailsComponent } from './empdetails.component';

const routes: Routes = [
  {path:'',component:EmpdetailsComponent},
  {path:'emp',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpdetailsRoutingModule { }
