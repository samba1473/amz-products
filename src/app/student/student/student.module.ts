import { NgModule } from '@angular/core'; 
import { StudentRoutingModule } from './student-routing.module'; 
import {MessageService,ConfirmationService} from 'primeng/api';
import { StudentComponent } from './student.component'; 
import { SharedModule } from 'src/app/sharedModule.module';
import { CalendarModule } from 'src/app/components/calender/calender';
 
@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [ 
      StudentRoutingModule,
      SharedModule, 
      CalendarModule
  ],
  providers: [MessageService, ConfirmationService ]
})
export class StudentModule { }
