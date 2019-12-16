import { WitService } from './../../../service/teste/wit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wit',
  templateUrl: './wit.component.html',
  styleUrls: ['./wit.component.css']
})
export class WitComponent implements OnInit {

  msg: string;
  response: string;

  constructor(private WitService: WitService) { }

  ngOnInit() {
  }

  





}
