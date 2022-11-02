import { Component, OnInit } from '@angular/core';
import { PostData } from './PostData';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: PostData[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  deletePost(postDataId: number) {
    this.posts.splice(postDataId - 1, 1);
    this.postsService.deletePost(postDataId);
  }
}
