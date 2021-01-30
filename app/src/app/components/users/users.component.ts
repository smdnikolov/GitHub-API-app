import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestApiService } from '../../core/api.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})

export class UsersComponent implements OnInit {

  @Input() users: any;
  @Input() isLoading: any;
  @Output() sendRepos = new EventEmitter<any>();
  @Output() sendLoading = new EventEmitter<any>();


  label = 'See Repos'


  constructor(public restApiService: RestApiService) { }

  ngOnInit(): void {
  }

  emitLoading() {
    this.sendLoading.emit(true)
  }

  getRepos(user: string) {

    this.restApiService.getRepos(user).subscribe((data: any) => {
      data.user=user;
      this.sendRepos.emit(data)
    })
  }

}
