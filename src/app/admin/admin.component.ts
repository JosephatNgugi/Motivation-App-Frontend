import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Router } from '@angular/router';
import { CommentsService } from '../services/comments.service'
import { LikesService } from '../services/likes.service'
import { UsersService } from '../services/users.service'
import { AdminreportService } from '../services/adminreport.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  postArr: any = [];
  commentlist:any=[];
  likeslist:any=[];
  userslist:any=[];
  admin_reportlist:any=[];

  ngOnInit() {
    this.getPosts();
    this.getComments();
    this.getLikes();
    this.getUsers();
    this.getadmin_report();

  }

  constructor(
    private router: Router,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private likesService: LikesService,
    private usersService: UsersService,
    private adminreportService: AdminreportService,
  ) { }

  getPosts() {
    this.postsService.getPosts().subscribe(data => {
      this.postArr = data;
    })
  }

  getComments() {
    this.commentsService.getComments().subscribe(data => {
      this.commentlist = data;
    })
  }

  getLikes() {
    this.likesService.getLikes().subscribe(data => {
      this.likeslist = data;
    })
  }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.userslist = data;
    })
  }

  getadmin_report() {
    this.adminreportService.getadmin_report().subscribe(data => {
      this.admin_reportlist = data;
    })
  }




}
