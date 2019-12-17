import { CommentsService } from './../../../service/comments.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/model/comments';

@Component({
  selector: 'app-comments-all',
  templateUrl: './comments-all.component.html',
  styleUrls: ['./comments-all.component.css']
})
export class CommentsAllComponent implements OnInit {

  
  constructor(private CommentsService: CommentsService) { }
  
  comments: Array<Comments>

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    this.CommentsService.getAll().subscribe((commentOut: Array<Comments>) => {
      this.comments = commentOut;
    });
  }  
}
