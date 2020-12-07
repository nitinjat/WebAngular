import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIpagesRoutingModule } from './uipages-routing.module';
import { HomepageComponent} from './homepage/homepage.component' ;
import { BannersComponent } from './banners/banners.component';
import {AboutpageComponent } from './aboutpage/aboutpage.component';
import {ContactUspageComponent} from './contact-uspage/contact-uspage.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  HomepageComponent,
  BannersComponent,
  AboutpageComponent,
  ContactUspageComponent,
  HeaderComponent,
  FooterComponent
  
  ],
  imports: [
    CommonModule,
       NgbModule,
    UIpagesRoutingModule
  ],
 exports:[HomepageComponent,AboutpageComponent,ContactUspageComponent,
  BannersComponent,
  HeaderComponent,
  FooterComponent]
  })
export class UIpagesModule { }
