import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }

  getById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
  
}
