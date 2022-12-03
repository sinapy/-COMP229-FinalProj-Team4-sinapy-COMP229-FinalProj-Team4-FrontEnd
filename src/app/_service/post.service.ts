import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

const baseUrl = 'https://wldg-backend.nn.r.appspot.com/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl+'view-posts');
  }

  get(id: any): Observable<Post> {
    return this.http.get(`${baseUrl}details/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'create-post', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}edit/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}delete/${id}`);
  }
}
