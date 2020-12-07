import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {Accountmodel} from "../adminpages/accountmodel";

@Injectable({
  providedIn: 'root'
})
export class AccountservicesService {

  apiURL: string = 'http://localhost:49814/api/Account/checkUser';

  constructor(private httpClient: HttpClient) {}
  //https://dzone.com/articles/login-and-registration-aspnet-web-api-using-angula
  LoginUserAccess(_objAccountmodel : Accountmodel):Observable<Accountmodel>
  {
    let params = new HttpParams();
    params = params.append('Username', _objAccountmodel.Username);
    params = params.append('password', _objAccountmodel.Password);
    console.log(this.httpClient.get<Accountmodel>(this.apiURL ,{params: params }));
    return this.httpClient.get<Accountmodel>(this.apiURL ,{params: params} );
  }
}
