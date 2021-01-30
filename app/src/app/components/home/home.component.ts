import { Component, OnInit, } from '@angular/core';
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
  repos = [];
  showRepos = false;
  showUsers = false;
  label = 'Get Users'
  isLoading = false;
  reposLoading = false;

  clickHandler() {

    if (this.label === 'Get Users') {
      this.showUsers = true;
      this.isLoading = true;
      this.restApiService.getUsers().subscribe((data: any) => {
        this.users = data;
        this.isLoading = false;
      })
      this.label = 'Back'
    } else if (this.label === 'Back' && this.showRepos) {
      this.showRepos = false;
      this.showUsers = true;
      this.isLoading = true;
      this.restApiService.getUsers().subscribe((data: any) => {
        this.users = data;
        this.isLoading = false;
      })
      this.label = 'Back'
    } else if (this.label === 'Back' && this.showUsers) {
      this.showUsers = false;
      this.label = 'Get Users'
    }
  }

  interceptLoading(data: any) {
    this.showUsers = false;
    this.showRepos = true;
    this.reposLoading = true;
  }

  interceptRepos(data: any) {
    this.repos = data;
    this.users = []
    this.reposLoading = false;

  }

  ngOnInit(): void {
  }


}
