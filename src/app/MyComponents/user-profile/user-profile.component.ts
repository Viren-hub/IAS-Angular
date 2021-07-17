import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../Services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private post:UserProfileService) { }
  popupData1:any={}
  getUserChallangeData:any={}
  getUserActivityData:any={}
  ngOnInit(): void {
  //   var resultArray = Object.keys(this.getUserActivityData).map(function(personNamedIndex){
  //     let person = this.getUserActivityData[personNamedIndex];
  //     // do something with person
  //     return this.getUserActivityData;
  // });
    this.post.getUserChallangeData(this.popupData1).subscribe((res)=>{
      this.getUserChallangeData=res; 
      console.log("getUserChallangeData",this.getUserChallangeData)
    })  
    this.post.getUserProfileData(this.popupData1).subscribe((res)=>{
      this.getUserActivityData=res;
      // let Activitydata=this.getUserActivityData.sort()
      console.log("getActivityData",this.getUserActivityData[0])
    })
  }
}
