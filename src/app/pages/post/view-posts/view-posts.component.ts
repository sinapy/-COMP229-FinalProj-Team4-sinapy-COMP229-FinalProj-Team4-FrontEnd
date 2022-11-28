import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  postsList = [
    {
      _id : 10,
      title : 'hello',
      price : 99,
      expires_on : Date.now() + Date.now(),
      status: 'ENABLED'

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
