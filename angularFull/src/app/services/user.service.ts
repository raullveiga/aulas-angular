import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
