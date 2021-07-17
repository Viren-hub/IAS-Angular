import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-steper',
  templateUrl: './event-steper.component.html',
  styleUrls: ['./event-steper.component.css']
})
export class EventSteperComponent implements OnInit {
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor() { }

  ngOnInit(): void {
  }

}
