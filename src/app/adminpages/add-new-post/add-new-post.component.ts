import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { max } from 'rxjs/operators';
import { ClsPostModel } from '../cls-post-model';
import { UiPostServiceService } from '../ui-post-service.service';
@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  FormPost: FormGroup;
  submitted = false;
  ImgPath = '';

  constructor(private fb: FormBuilder , private  _objPostService : UiPostServiceService ) { }

  ngOnInit() {
    //  this.FormPost = new FormGroup({
    //    PostName : new FormControl()
    //  })

    this.FormPost = this.fb.group({

      lastName: ['', Validators.required],
      PostName: ['', Validators.required],
      PostTitle: ['', Validators.required],
      PostShort: ['', Validators.required],
      PostDesc: ['', Validators.required],
      PostImage: ['', Validators.required],
      PostPage: ['', Validators.required]
    });
  }
  get f() { return this.FormPost.controls; }
  OnSubmit() {
    // console.log(this.FormPost.value);
    // console.log(this.FormPost.touched);
    // console.log(this.FormPost.controls.PostName.touched);
    // console.log(this.FormPost.controls.PostImage.value);
    // //https://bezkoder.com/angular-8-upload-multiple-images/    https://jasonwatmore.com/post/2020/07/07/angular-10-reactive-forms-validation-example
    let _postAdd = this.FormPost.value   
    this.AddNewPostMathod(_postAdd);
    // if (this.FormPost.invalid) {
    //   return;
    // }

  }

  AddNewPostMathod(_ObjPost : ClsPostModel)
  {
    console.log(_ObjPost.strPostTitle);
    this._objPostService.InsertNewPost(_ObjPost).subscribe(
      _post =>{
        debugger;

         console.log(_post);
        if(_post)
        {
         

       
        }
        else
        {


        }
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.FormPost.reset();
  }
}
