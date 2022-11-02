import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { PostData } from './PostData';
import { filter, map, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<PostData[]> {
    return this.httpClient
      .get<PostData[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((posts) =>
          from(posts).pipe(
            filter((post) => post.id <= 10),
            toArray<PostData>()
          )
        ),
        mergeMap((posts) => posts)
      );
  }

  deletePost(postId: number) {
    this.httpClient.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
