import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { BodyComponent } from './components/static/body/body.component';
import { NavbarComponent } from './components/static/navbar/navbar.component';
import { TitleComponent } from './components/static/title/title.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { WitComponent } from './components/teste/wit/wit.component';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    BodyComponent,
    NavbarComponent,
    TitleComponent,
    UserListComponent,
    WitComponent
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
