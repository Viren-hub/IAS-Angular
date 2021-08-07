import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ClientServiceService } from '../../Services/client-service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  eventdata:any;
  columnDefs = [
    { field: 'Name', sortable: true, filter: true },
    { field: 'StavaID', sortable: true, filter: true },
    { field: 'Cycling', sortable: true, filter: true },
    { field: 'Running', sortable: true, filter: true },
    { field: 'Walking', sortable: true, filter: true },
    { field: 'Swimming', sortable: true, filter: true }
];

rowData:any;
  constructor(private http: HttpClient,private post: ClientServiceService) { }

  ngOnInit(): void {
    this.eventdata = this.http.get<any[]>('http://23.95.228.167:8080/auth/leaderboard/81275530');
    this.post.getData().subscribe((res)=>{
      this.rowData[0]=res
      console.log("TableData in Table Component",this.rowData=JSON.stringify(res)); 
      console.log("TableData in observable",this.eventdata); 
    })
  }
  
}
