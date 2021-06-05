import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  url='https://restcountries.eu/rest/v2/name/ind';
  constructor(private http :HttpClient) { }
  getData()
  {
    return this.http.get(this.url);
  }
}
