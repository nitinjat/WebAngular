import { Component, OnInit } from '@angular/core';
import { BannersComponent } from '../banners/banners.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',  
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let Fotter = new FooterComponent();
  }

}
