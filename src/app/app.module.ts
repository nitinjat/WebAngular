import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient ,HttpClientModule} from '@angular/common/http';


import { UIpagesModule } from './uipages/uipages.module';
import { AdminpagesModule } from './adminpages/adminpages.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponentComponent,
    FooterComponentComponent,
    PagenotfoundComponent
 
  ],
  imports: [    
    BrowserModule,
    UIpagesModule,    
    AdminpagesModule,
    RouterModule,
    AppRoutingModule,    
    HttpClientModule, NgbModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
