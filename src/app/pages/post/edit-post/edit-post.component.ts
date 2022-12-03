import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import {format} from "date-fns"

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post = {};
  submitted = false;
  

  constructor(private postService: PostService, private route: ActivatedRoute,
    private router: Router) { }

  options = ['ENABLE', 'DISABLE']
  


  ngOnInit(): void {
    this.retrievePost(this.route.snapshot.params["id"]);
  }

  retrievePost(id: string): void {
    this.postService.get(id)
      .subscribe({
        next: (data) => {
          this.post = data;
          this.post.expires_on = format((new Date(data.expires_on || "")),'yyyy-MM-dd')
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  savePost(): void {
    const data = {
      _id: this.post._id,
      title: this.post.title,
      price: this.post.price,
      status: this.post.status,
      expires_on: this.post.expires_on,
    };

    this.postService.update(this.post._id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
}
