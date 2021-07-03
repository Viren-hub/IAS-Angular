import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {
 stavaId:any
  constructor() {
    this.stavaId={}
   }
   popupData:any={}
  ngOnInit(): void {
  }
}
