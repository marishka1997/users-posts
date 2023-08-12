import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsRoutingModule } from './user-posts-routing.module';
import { UserPostsComponent } from './user-posts.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [UserPostsComponent],
  imports: [
    CommonModule,
    UserPostsRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class UserPostsModule {}
