import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_service/post.service';
import {format} from "date-fns"
import {TokenStorageService} from "../../../_service/token-storage.service";


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  posts?: Post[];
  currentPost: Post = {};
  currentIndex = -1;
  isLoggedIn : boolean = false;

  user : any;


  constructor(private postService: PostService, private tokenStorageService: TokenStorageService) { }


  ngOnInit(): void {
    this.retrievePosts();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (!this.isLoggedIn){
      //TODO redirect to login
    }

    if (this.isLoggedIn){
      this.user = this.tokenStorageService.getUser();
    }
  }

  retrievePosts(): void {
    this.postService.getAll()
      .subscribe({
        next: (data) => {
          let postsList : Post[] = []
          console.log(postsList);
          data.forEach(e => {
            e.expires_on = format((new Date(e.expires_on || "")),'yyyy-MM-dd')
            e.status = Date.parse(e.expires_on) < Date.now() ? 'DISABLED' : 'ENABLED';
            postsList.push(e)
          })
          console.log("HELLO THIS IS HAPPENING")
          console.log(postsList);
          this.posts = postsList;

          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePosts();
    this.currentPost = {};
    this.currentIndex = -1;
  }

  setActivePost(post: Post, index: number): void {
    this.currentPost = post;
    this.currentIndex = index;
  }

  deletePost(_id: any) {
    this.postService.delete(_id)
      .subscribe({
        next: (data) => {
          this.refreshList();
    }
      })

  }
}
