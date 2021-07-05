import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  url='http://23.95.228.167:8080/api/getUserDetails/32219620'
  // 'http://23.95.228.167:8080/auth/activities/summary/81275530'
  constructor(private http :HttpClient) { }
  getUserProfileData(data:any)
  {
    return this.http.get(data);
  } 
}
