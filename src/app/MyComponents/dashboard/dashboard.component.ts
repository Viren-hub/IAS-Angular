import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/client-service.service';
import{PopOverComponent} from '../pop-over/pop-over.component'
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private post:ClientServiceService,
    private dialog:MatDialog) { }
    openPopover(stravaId:number){
       let alldata = this.eventdata.filter((item:any)=>(
        item.stravaId===stravaId 
      ))
      console.log("AllData",alldata)
      let dialogRef= this.dialog.open(PopOverComponent,{
      })
      dialogRef.componentInstance.popupData =alldata[0] ;   
    }
  eventdata:any={}
  lederdata={}
  ngOnInit(): void {
    this.post.getData().subscribe((res)=>{
      this.eventdata=res; 
    })  
  }
}
