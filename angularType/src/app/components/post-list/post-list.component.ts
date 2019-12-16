import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model.ts/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Post>;
  sPost: Post;
  inputId: number

  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.findAll();
  }
  
  
  findAll(){
    this.PostService.getAll().subscribe((postOut: Array<Post>) => {
      this.posts = postOut;
    })
  }

  findById(){
    this.PostService.getById(this.inputId).subscribe((postOut: Post) =>
    this.sPost = postOut);
  }

}
