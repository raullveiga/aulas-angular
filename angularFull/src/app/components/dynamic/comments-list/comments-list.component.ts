import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/model/comments';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments: Array<Comments>;
  comment: Comments;
  id: number;

  constructor(private CommentsService: CommentsService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.CommentsService.getAll().subscribe((commentsOut: Array<Comments>) => {
      this.comments = commentsOut;
    });
  }

  findById(){
    this.CommentsService.getById(this.id).subscribe((commentOut: Comments) => {
      this.comment = commentOut
    });
  }
}
