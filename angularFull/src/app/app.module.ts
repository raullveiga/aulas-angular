import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static/header/header.component';
import { BodyComponent } from './components/static/body/body.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { PostsListComponent } from './components/dynamic/posts-list/posts-list.component';
import { UsersListComponent } from './components/dynamic/users-list/users-list.component';
import { CommentsListComponent } from './components/dynamic/comments-list/comments-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/static/header/navbar/navbar.component';
import { HomeComponent } from './components/dynamic/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PostsListComponent,
    UsersListComponent,
    CommentsListComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
