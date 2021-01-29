import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {
  constructor() { }

  label = "Get Users"

  usersHandler() {
    console.log('clicked from users')
  }

  ngOnInit(): void {
  }

}
