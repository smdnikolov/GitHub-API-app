import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../core/api.service'
import { User } from '../../core/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public restApiService: RestApiService) { }

  users: User[] = [];

  showUsers = false;
  showRepo = false;
  label = 'Get Users'
  isLoading = true;


  clickHandler() {

    if (this.label === 'Get Users') {
      this.restApiService.getUsers().subscribe((data: any) => {
        this.users = data;
        console.log(this.users)
        this.isLoading = false;
      })
      this.showUsers = true;
      this.showRepo = false;
      this.label = 'Back'
    } else if (this.label === 'Get Repos') {
      this.showUsers = false;
      this.showRepo = true;
      this.label = 'Back'
    } else {
      this.users = []
      this.isLoading = true;
      this.showUsers = false;
      this.showRepo = false;
      this.label = 'Get Users'
    }

  }

  ngOnInit(): void {
  }
}
