import { CommentsListComponent } from './components/dynamic/comments-list/comments-list.component';
import { PostsListComponent } from './components/dynamic/posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/dynamic/users-list/users-list.component';


const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'comments', component: CommentsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
