import { Component, OnInit } from '@angular/core';
import{DialogService} from'../../Services/dialog.service'
import{ClientServiceService} from '../../client-service.service'
@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {
 stavaId:any
  constructor(private get:DialogService,private getClientData:ClientServiceService) {
    this.stavaId={}
    console.log("Data in DialogComponet",this.stavaId)
   }
   popupData:any={}
  ngOnInit(): void {
    this.popupData={}
    this.get.getData().subscribe((Response)=>{
    this.popupData=Response;
    })
    
  }
}
