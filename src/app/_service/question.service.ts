import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

let baseUrl = "";
if (environment.production) {
  baseUrl = 'https://wldg-backend.nn.r.appspot.com/api/posts';
}else {
  baseUrl = 'http://localhost:3000/api/posts';
}
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  postQuestion(postId: any, data : any){
    return this.http.post(baseUrl+"/"+postId+"/questions", data)
  }

  postAnswer(postId: any, questionId: any, data: any){
    return this.http.post(baseUrl+"/"+postId+"/questions/"+questionId+"/answer", data);
  }
}
