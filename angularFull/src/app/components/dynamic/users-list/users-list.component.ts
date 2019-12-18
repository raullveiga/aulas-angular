import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  
  users: Array<Users>;
  user: Users;
  id: number;

  constructor( private UserService: UserService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.UserService.getAll().subscribe((userOut: Array<Users>) => {
      this.users = userOut
    });
  }

  findById(){
    this.UserService.getById(this.id).subscribe((userOut: Array<Users>) => {
      this.user = userOut
    });
  }


}
