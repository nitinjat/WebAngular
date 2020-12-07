import { Component, OnInit } from '@angular/core';
import {FormBuilder ,Form  ,Validators,FormGroup,ReactiveFormsModule }from "@angular/forms";
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Accountmodel} from '../accountmodel';
import {AccountservicesService} from '../accountservices.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  loginForm : FormGroup ;
  returnUrl : string  ;
       succ : string ;
  constructor(
       private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _objAcntService : AccountservicesService       
        
  ) { }

  // ngOnInit()
  // {
  //   this.loginForm(); 
  // }
   
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Username : ['',Validators.required],
      Password : ['',Validators.required],
    })
  }
  onSubmit()
  {
    let UserLogin = this.loginForm.value
    this.LoginMathod(UserLogin);
  }
  LoginMathod(_loginUser : Accountmodel)
  {
    this._objAcntService.LoginUserAccess(_loginUser).subscribe(
      emp =>{
        debugger;
        this.succ = emp.StrAccess; 
         console.log(emp);
        if(emp)
        {
          //this.loginForm.reset();
          //localStorage.setItem("UserDetails",JSON.stringify(succ));  // Works as session
          this.router.navigate(['./Admin/Dashboard']);
          console.log(this.succ);
        }
        else
        {
        
          
        }
      }
    );
  }

}
