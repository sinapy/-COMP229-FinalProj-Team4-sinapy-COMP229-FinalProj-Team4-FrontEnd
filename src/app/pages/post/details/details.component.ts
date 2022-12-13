import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import {format} from "date-fns"
import {QuestionService} from "../../../_service/question.service";
import {Question} from "../../../models/question.model";
import {TokenStorageService} from "../../../_service/token-storage.service";
import {Answer} from "../../../models/answer.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post: Post = {};
  newQuestion: Question = {}
  submitted : boolean = false;
  isAuthorized : boolean = false;
  questionList : number[] = [];
  answers: Answer[] = [];



  constructor(private postService: PostService, private route: ActivatedRoute,
    private router: Router, private questionService : QuestionService, private token: TokenStorageService) { }

  async ngOnInit(): Promise<void> {
    this.retrievePost(this.route.snapshot.params["id"]);
    await new Promise(f => setTimeout(f, 1000))
    let user = await this.token.getUser();
    if (user != null) {
      this.isAuthorized = user.id === this.post.owner;
    }
    // @ts-ignore
    for (let i = 0; i < this.post.questions?.length; i++){
      this.questionList[i] = 0;
      this.answers.push(new Answer());
      console.log("this is actually happening")
      this.answers[i].content = ""
    }

  }

  retrievePost(id: string): void {
    this.postService.get(id)
      .subscribe({
        next: (data) => {
          this.post = data;
          this.post._id = data._id;
          this.post.price = data.price;
          this.post.title = data.title;
          this.post.expires_on = format((new Date(data.expires_on || "")),'yyyy-MM-dd');
          this.post.status = Date.parse(this.post.expires_on) < Date.now() ? 'DISABLED' : 'ENABLED';
          this.post.owner = data.owner;
          this.post.questions = data.questions
          console.log(this.post);
        },
        error: (e) => console.error(e)
      });
  }


  onQuestionSubmit(): void {

    this.questionService.postQuestion(this.post._id, this.newQuestion)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }


  onAnswerSubmit(i: number): void {
    console.log("selected answer is " + this.answers[i]);
    console.log("answers are " + this.answers)
    console.log("i is " + i);
    // @ts-ignore
    this.questionService.postAnswer(this.post._id, this.post.questions[i]._id, this.answers[i])
      .subscribe({
        next: (res) =>{
          console.log(res);
          for (let number of this.questionList) {
            number = 0
          }
          this.questionList[i] = 1;
        },
        error: (e) => console.error(e)
      })
  }
}
