import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = {
    _id: "",
    title: '',
    price: 0,
    //status: '',
    expires_on: ''
  };
  submitted = false;

  constructor(private postService: PostService) { }

  options = ['ENABLE', 'DISABLE']



  ngOnInit(): void {
  }

  savePost(): void {
    const data = {
      title: this.post.title,
      price: this.post.price,
      //status: this.post.status,
      expires_on: this.post.expires_on,
    };

    this.postService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      price: 0,
      //status: '',
      expires_on: ''
    };
  }

}
