import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/client-service.service';
import{PopOverComponent} from '../pop-over/pop-over.component'
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private post:ClientServiceService,
    private dialog:MatDialog) { }
    openPopover(){
      this.dialog.open(PopOverComponent,{data:this.eventdata.stravaId})
    }
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
