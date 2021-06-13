import { Component, OnInit } from '@angular/core';
import{LeaderBordDataService} from '../../Services/leader-bord-data.service'
@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.css']
})
export class EventCardsComponent implements OnInit {

  constructor(  private getInfo:LeaderBordDataService) { }
  lederdata:any={}
  ngOnInit(): void {
    this.getInfo.getData().subscribe((Response)=>
      {
        this.lederdata=Response;
      })
  }

}
