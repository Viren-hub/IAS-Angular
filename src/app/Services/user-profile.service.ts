import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private http :HttpClient) { }
  getUserChallangeData(data:number)
  {
    console.log("UserprofileService",data)
    let url='http://23.95.228.167:8080/auth/activities/challengesummary/'
    return this.http.get(url+data);
  } 
  getUserProfileData(data:number)
  {
    
    console.log("UserprofileService",data)
    let url='http://23.95.228.167:8080/api/getUserDetails/'
    return this.http.get(url+data);
  } 
}
