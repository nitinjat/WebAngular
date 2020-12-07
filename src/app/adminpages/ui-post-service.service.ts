import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClsPostModel } from "../adminpages/cls-post-model";

@Injectable({
  providedIn: 'root'
})
export class UiPostServiceService {


  apiURL: string = 'http://localhost:49814/api/Spa_PostsDetails/';

  constructor(private httpClient: HttpClient) { }
  //https://dzone.com/articles/login-and-registration-aspnet-web-api-using-angula
  InsertNewPost(_objPost: ClsPostModel): Observable<ClsPostModel> {


    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    let params = new HttpParams();
    params = params.append('action', 'Insert');
    params = params.append('PostTitle', _objPost.strPostTitle);
    console.log('post :' + _objPost.strPostTitle);
    //params = params.append('PostDescirption', _objPost.strPostShortDesc);
    params = params.append('PostDescirption', _objPost.strPostDec);
    params = params.append('PostImage', _objPost.strPostImage);
    params = params.append('PostPageName', _objPost.strpageName);
    //console.log(this.httpClient.get<ClsPostModel>(this.apiURL ,{params: params }));
    return this.httpClient.post<ClsPostModel>(this.apiURL, _objPost, httpOptions);
  }

  GetAllPost(): Observable<ClsPostModel[]> {
    return this.httpClient.get<ClsPostModel[]>(this.apiURL);
  }

  DeletePost(Postid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.httpClient.delete<number>(this.apiURL + 'DeleteSpa_PostsDetails?id='+Postid ,httpOptions);
  }


  // updateEmployee(employee: Employee): Observable<Employee> {  
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  //   return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
  //   employee, httpOptions);  
  // }


}
