import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'https://wldg-backend.nn.r.appspot.com/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserName(): Observable<any> {
    return this.http.get(API_URL, {responseType: "text"})
  }

  editUserName(newName: string): Observable<any>{
    return this.http.put(API_URL, {"newName" : newName});
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: "text"});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType:"text"});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: "text"});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: "text"});
  }
}
