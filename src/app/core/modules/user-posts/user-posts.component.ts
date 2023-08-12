import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs';
import { UserPostsService } from '../../services/user-posts.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(
    private route: ActivatedRoute,
    private userPostsService: UserPostsService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((userId) => {
        if (userId) {
          return this.userPostsService.getPosts(+userId);
        } else {
          return of([]);
        }
      })
    );
  }

  calculatePostHeight(body: string): string {
    const element = document.createElement('div');
    element.innerHTML = body;
    const height = element.scrollHeight;
    if (height <= 100) {
      return 'span 2';
    } else if (height <= 200) {
      return 'span 3';
    } else if (height <= 300) {
      return 'span 4';
    } else if (height <= 400) {
      return 'span 5';
    } else {
      return 'span 6';
    }
  }
}
