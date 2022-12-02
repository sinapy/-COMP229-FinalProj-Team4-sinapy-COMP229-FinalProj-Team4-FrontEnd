import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const API_URL = 'https://wldg-backend.nn.r.appspot.com/';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(API_URL + 'view-posts', {responseType: "text"});
  }

  getPostById(id: string): Observable<any> {
    return this.http.get(API_URL + `details/${id}`, {responseType:"text"});
  }

  createPost(form: FormData): Observable<any> {
    return this.http.post(API_URL + 'create-post', form);
  }

  editPost(form: FormData, id: string): Observable<any> {
    return this.http.put(API_URL + `edit/${id}`, form);
  }

  deletePost(id: string): Observable<any>{
    return this.http.delete(API_URL + `delete/${id}`)
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: "text"});
  }

}
