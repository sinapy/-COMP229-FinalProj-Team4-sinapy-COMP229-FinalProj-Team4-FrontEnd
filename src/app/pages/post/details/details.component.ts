import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import {format} from "date-fns"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post: Post = {};

  constructor(private postService: PostService, private route: ActivatedRoute,
    private router: Router) { }

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

}
