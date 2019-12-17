import { WitService } from './../../../service/teste/wit.service';
import { Component, OnInit } from '@angular/core';
import { Wit } from 'src/app/model.ts/wit';

@Component({
  selector: 'app-wit',
  templateUrl: './wit.component.html',
  styleUrls: ['./wit.component.css']
})
export class WitComponent implements OnInit {

  msg: string;
  response: string;
  wit: Wit = new Wit();

  constructor(private WitService: WitService) { }

  ngOnInit() {
  }


  getResponse(msg: string){
    this.WitService.getMessage(msg).subscribe((witOut: Wit) =>
    this.wit = witOut);
  }

  responseMsg(){
    this.response = this.wit._text;
  }
  
  







}
