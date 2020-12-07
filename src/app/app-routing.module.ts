import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  // { path: 'MySchool', loadChildren: './uipages/module#UIpagesModule' },
  //{ path: 'MySchool', loadChildren: './module#AdminpagesModule' },
  { path: 'Admin', loadChildren: './adminpages/adminpages.module#AdminpagesModule' },
  { path: 'MySchool', loadChildren :'./uipages/uipages.module#UIpagesModule' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
