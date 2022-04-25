import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@core/store/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '@shared/interfaces/posts.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPosts(): Observable<Post[]> {
    const endpoint = '/posts';

    return this.http
      .get(endpoint)
      .pipe(tap((posts: Post[]) => this.store.set('posts', posts)));
  }

  getPost(id: number) {
    const endpoint = `/posts/${id}`;
    return this.http
      .get(endpoint)
      .pipe(tap((post: Post) => this.store.set('selectedPost', post)));
  }

  addPost(body: Post): Observable<Post> {
    const endpoint = '/posts';

    return this.http.post<Post>(endpoint, body);
  }

  updatePost(id: number, body: Post): Observable<Post> {
    const endpoint = `/posts/${id}`;

    return this.http.put<Post>(endpoint, body);
  }
}
