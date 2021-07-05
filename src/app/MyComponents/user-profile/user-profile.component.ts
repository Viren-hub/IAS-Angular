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
  getUserProfileData:any={}
  ngOnInit(): void {
    this.post.getUserChallangeData(this.popupData1).subscribe((res)=>{
      this.getUserChallangeData=res; 
      console.log("getUserChallangeData",this.getUserChallangeData)
    })  
    this.post.getUserProfileData(this.popupData1).subscribe((res)=>{
      this.getUserProfileData=res;
      console.log("getUserProfileData",this.getUserProfileData)
    })
  }
}
