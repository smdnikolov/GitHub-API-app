import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor() { }


  @Input() repos: any;
  @Input() isLoading: any;


  ngOnInit(): void {
    
  }


  log(){
    console.log(this.isLoading)
    console.log(this.repos.length)
  }

}
