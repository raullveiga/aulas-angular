import { CommentsIdComponent } from './components/dynamic/comments-id/comments-id.component';
import { CommentsAllComponent } from './components/dynamic/comments-all/comments-all.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'commentsById', component: CommentsIdComponent },
  { path: 'commentsAll',      component: CommentsAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
