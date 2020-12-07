import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminpagesRoutingModule } from './adminpages-routing.module';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BackheaderComponent } from './backheader/backheader.component';
import { BackfooterComponent } from './backfooter/backfooter.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { AllPostComponent } from './all-post.component';
import { EditPostComponent } from './edit-post.component';
import { AddEventComponent } from './add-event.component';
import { AllEventComponent } from './all-event.component';


@NgModule({
  declarations: [DashboardpageComponent, LoginPageComponent, BackheaderComponent, BackfooterComponent, AddNewPostComponent, AllPostComponent, EditPostComponent, AddEventComponent, AllEventComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminpagesRoutingModule,
    ReactiveFormsModule
  
  ],
  exports: [LoginPageComponent,DashboardpageComponent]
 
})
export class AdminpagesModule { }
