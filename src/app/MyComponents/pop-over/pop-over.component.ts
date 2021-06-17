import { Component, OnInit } from '@angular/core';
import{DialogService} from'../../Services/dialog.service'
import{ClientServiceService} from '../../client-service.service'
@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {
 stavaID:object
  constructor(private get:DialogService,private getClientData:ClientServiceService) {
    this.stavaID={}
    console.log("AlldataStava",this.stavaID)
   }
  popupData:any={}
  ngOnInit(): void {
    this.popupData={}
    this.get.getData().subscribe((Response)=>{
    // this.popupData=Response;
    })
    
  }
}
