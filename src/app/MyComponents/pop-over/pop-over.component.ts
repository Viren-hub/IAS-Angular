import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../Services/user-profile.service';
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
   
  ngOnInit(): void {
    this.post.getUserProfileData(this.popupData.stravaId).subscribe((Response)=>{
      this.Userdata=Response;
    })
  }
  
}
