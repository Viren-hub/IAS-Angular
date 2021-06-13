import { Component, OnInit } from '@angular/core';
import Users from ".././userData"
import {ClientServiceService} from "../../client-service.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Users:any[]=[];
  constructor(private post:ClientServiceService) { }
  eventdata:any={}
  lederdata={}
  ngOnInit(){
    this.post.getData().subscribe((res)=>{
      console.log(res);
      this.eventdata=res;
      
    })
  }
}
