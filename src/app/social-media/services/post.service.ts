import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { environment } from 'src/environments/environment';

@Injectable() 
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
}
