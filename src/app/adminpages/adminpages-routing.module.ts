import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import {AddNewPostComponent} from './add-new-post/add-new-post.component';
import { AllPostComponent } from './all-post.component';
import { AllEventComponent } from './all-event.component';
import { AddEventComponent } from './add-event.component';

const routes: Routes = [
  // { path : 'Admin' ,children : [
  // { path :'Login' , component : LoginPageComponent}  ,
  // { path :'Dashboard' , component : DashboardpageComponent} ,
  // { path :'NewPost' , component : AddNewPostComponent}
  //  ]
   { path :'' , component : LoginPageComponent}  ,
   { path :'Login' , component : LoginPageComponent}  ,
   { path :'Dashboard' , component : DashboardpageComponent} ,
   { path :'NewPost' , component : AddNewPostComponent},
   { path :'AllPost' , component : AllPostComponent},
   { path :'AllEvent' , component : AllEventComponent},
   { path :'NewEvent' , component : AddEventComponent}
  ] ;
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpagesRoutingModule { }
