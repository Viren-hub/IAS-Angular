import { Component, OnInit } from '@angular/core';
import{DialogService} from'../../Services/dialog.service'
@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {

  constructor(private get:DialogService) { }
  popupData:any={}
  ngOnInit(): void {
    this.get.getData().subscribe((Response)=>{
        this.popupData=Response;
    })
  }

}
