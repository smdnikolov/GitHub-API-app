import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {


  @Input() label: any;
  @Output() onClick = new EventEmitter<any>();

  constructor() {

  }
  handler(event: any) {
    this.onClick.emit(event);
  }
  ngOnInit(): void {
  }

}
