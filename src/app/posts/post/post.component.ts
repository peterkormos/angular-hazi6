import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../PostData';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postData?: PostData;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((value) =>
      this.postsService
        .getPost(value['id'])
        .subscribe((postData) => (this.postData = postData))
    );
  }
}
