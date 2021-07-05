import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../Services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private post:UserProfileService) { }
  popupData:any={}
  eventdata:any={}
  ngOnInit(): void {
    this.post.getUserProfileData(this.popupData).subscribe((res)=>{
      this.eventdata=res; 
    })  
  }
}
