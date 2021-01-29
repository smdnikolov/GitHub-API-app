import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  showUsers = false;
  showRepo = false;
  label = 'Get Users'


  clickHandler() {
    if (this.label === 'Get Users') {
      this.showUsers = true;
      this.showRepo = false;
      this.label = 'Back'
    } else if (this.label === 'Get Repos') {
      this.showUsers = false;
      this.showRepo = true;
      this.label = 'Back'
    } else {
      this.showUsers = false;
      this.showRepo = false;
      this.label = 'Get Users'
    }

  }

  ngOnInit(): void {
  }
}
