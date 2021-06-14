import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/client-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private post:ClientServiceService) { }
  eventdata:any={}
  lederdata={}
  Users:any[]=[];
  ngOnInit(): void {
    this.post.getData().subscribe((res)=>{
      console.log(res);
      this.eventdata=res;
      
    })
  }
}
