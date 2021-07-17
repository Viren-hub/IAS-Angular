import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../Services/user-profile.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {
 stavaId:any
  constructor(private post:UserProfileService) {
    this.stavaId={}
   }
   popupData:any={}
   Userdata:any={}
   dataSource:any;
   getUserActivityData:any;
   newData:any;
  
  
  ngOnInit(): void {
    this.post.getUserProfileData(this.popupData.stravaId).subscribe((Response)=>{
      this.Userdata=Response;
      console.log("popupdata:",this.Userdata)
    })
    
     this.post.getUserChallangeData(this.popupData.stravaId).subscribe((res)=>{
      this.getUserActivityData=res; 
      console.log("getUserChallangeDataInPopover",this.getUserActivityData)
      this.dataSource = new MatTableDataSource(this.getUserActivityData.name);
    })
    
  }  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("FilterData",filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
