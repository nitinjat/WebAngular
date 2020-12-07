import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClsPostModel } from './cls-post-model';
import { UiPostServiceService } from './ui-post-service.service';
@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  allEmployees: Observable<ClsPostModel[]>;  
  constructor(private _objservice : UiPostServiceService) { }

  ngOnInit(): void {

    this.loadAllEmployees();  
  }
  loadAllEmployees() {  
    this.allEmployees = this._objservice.GetAllPost();  
    //https://www.c-sharpcorner.com/article/crud-operation-in-angular-7-using-web-api/
  }  
}
