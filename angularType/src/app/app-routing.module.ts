import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { WitComponent } from './components/teste/wit/wit.component';


const routes: Routes = [
  
    { path: 'posts', component: PostListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'wit', component: WitComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
