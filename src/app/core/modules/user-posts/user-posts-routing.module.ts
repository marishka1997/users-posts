import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './user-posts.component';

const routes: Routes = [
  { path: '', component: UserPostsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPostsRoutingModule {}
