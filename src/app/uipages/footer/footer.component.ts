import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute,Route} from '@angular/router';
@Component({
  selector: 'app-footer',  
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
