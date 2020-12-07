import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent} from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactUspageComponent } from './contact-uspage/contact-uspage.component';  

const routes: Routes = [
  // { path: 'MySchool' , children :[ 
  // {path:'Home',component: HomepageComponent},
  // {path:'AboutUs',component: AboutpageComponent},
  // {path:'Contact',component: ContactUspageComponent} 
  // ]
  // }
  {path:'Home',component: HomepageComponent},
  {path:'AboutUs',component: AboutpageComponent},
  {path:'Contact',component: ContactUspageComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIpagesRoutingModule { }
