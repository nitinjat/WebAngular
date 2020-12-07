import { Component } from '@angular/core';
import { Router  , RouterModule  } from  '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebSchool';

  constructor(public router : Router){  }
}