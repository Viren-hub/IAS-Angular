import { Component, OnInit } from '@angular/core';
import Users from ".././userData"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Users:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.Users=[{
      userID:101,
      userName:"Virendra",
      userPassion:"Cycling",
      userCity:"Jalgaon",
      userHours:87
    },
    {
      userID:102,
      userName:"Rajvardhan",
      userPassion:"Swimming",
      userCity:"Kolhapur",
      userHours:86
    },
    {
      userID:103,
      userName:"Swapnil",
      userPassion:"Treking",
      userCity:"Latur",
      userHours:81
    },
    {
      userID:104,
      userName:"Shubham",
      userPassion:"Running",
      userCity:"Sambhajinagar",
      userHours:80
    },
  {
      userID:105,
      userName:"Nilesh",
      userPassion:"Treking",
      userCity:"Pune",
      userHours:75
    }]
  }

}
