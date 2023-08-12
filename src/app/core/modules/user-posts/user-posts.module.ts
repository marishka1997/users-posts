import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPostsRoutingModule} from './user-posts-routing.module';
import {UserPostsComponent} from "./user-posts.component";

@NgModule({
  declarations: [
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    UserPostsRoutingModule,
  ]
})
export class UserPostsModule {
}
