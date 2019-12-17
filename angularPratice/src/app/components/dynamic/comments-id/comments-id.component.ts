import { CommentsService } from './../../../service/comments.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/model/comments';

@Component({
  selector: 'app-comments-id',
  templateUrl: './comments-id.component.html',
  styleUrls: ['./comments-id.component.css']
})
export class CommentsIdComponent implements OnInit {

  constructor(private CommentsService: CommentsService) { }

  comments: Comments = new Comments(null,null,null,null,null);
  id: number;

  ngOnInit() {
  }

  listById() {
    this.CommentsService.getById(this.id).subscribe((commentOut: Comments) =>
      this.comments = commentOut);
  }
}
