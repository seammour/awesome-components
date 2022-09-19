import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$! : Observable<Post[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts$ =  this.route.data.pipe(
      map(data => data['posts'])
    );
    
  }

}
