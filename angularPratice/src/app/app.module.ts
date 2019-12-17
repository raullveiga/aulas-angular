import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsAllComponent } from './components/dynamic/comments-all/comments-all.component';
import { CommentsIdComponent } from './components/dynamic/comments-id/comments-id.component';
import { BodyComponent } from './components/static/body/body.component';
import { NavbarComponent } from './components/static/navbar/navbar.component';
import { TitleComponent } from './components/static/title/title.component';
import { FootComponent } from './components/static/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsAllComponent,
    CommentsIdComponent,
    BodyComponent,
    NavbarComponent,
    TitleComponent,
    FootComponent
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
