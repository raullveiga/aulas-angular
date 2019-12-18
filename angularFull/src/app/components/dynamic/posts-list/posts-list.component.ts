import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/model/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  
  posts: Array<Posts>;
  post: Posts;
  id: number;

  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.PostService.getAll().subscribe((postsOut: Array<Posts>) => {
      this.posts = postsOut;
    })
  }

  findById() {
    this.PostService.getById(this.id).subscribe((postOut: Posts) =>
      this.post = postOut);
  }
}
