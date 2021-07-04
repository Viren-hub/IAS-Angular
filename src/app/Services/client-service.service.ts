import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  url='http://23.95.228.167:8080/auth/leaderboard';
  constructor(private http :HttpClient) { }
  getData()
  {
    return this.http.get(this.url);
  }  
}
