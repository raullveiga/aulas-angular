import { User } from './../../model.ts/user';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
  users: Array<User> = new Array<User>();
  inputId: number;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.findAll();
  }

  
  findAll() {
    this.UserService.getAll().subscribe((usersOut: Array<User>) => {
      this.users = usersOut;
    })
  }

  findById(){
    this.UserService.getById(this.inputId).subscribe((postOut: User) =>
    this.users[0] = postOut);
  }


}
