import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../_service/post.service";
import {UserService} from "../../_service/user.service";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  name : string = "";
  submitted = false;

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.retreiveUserName();
  }

  retreiveUserName() {
    this.userService.getUserName()
      .subscribe({
        next: (data) => {
          this.name = data;
        },
        error: (e) => {
          console.error(e)
          
        }
      })
  }


  onEditUser(){
    this.userService.editUserName(this.name)
      .subscribe({
        next: (data => {
          this.submitted = true
        }),
        error: (e) => console.error(e)
      })
  }
}
