import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users!: Observable<User[]>;


  constructor(private userList: UserListService, private router: Router) {}

  ngOnInit() {
    this.users = this.userList.getUsers();
  }

  viewUserDetails(id: number) {
    this.router.navigate([`users/${id}`]);
  }
}
