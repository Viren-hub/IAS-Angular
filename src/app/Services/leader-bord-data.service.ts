import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeaderBordDataService {

  url='http://23.95.228.167:8080/api/getDashboardData';
  constructor(private http :HttpClient) { }
  getData()
  {
    return this.http.get(this.url);
  }
}
