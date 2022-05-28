import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-nashik',
  templateUrl: './nashik.component.html',
  styleUrls: ['./nashik.component.css']
})
export class NashikComponent implements OnInit {
  public data:any;

  constructor(private serv:DataService) {this.getNashikData(); }

  ngOnInit(): void {
  }
  getNashikData(){
    this.serv.getNashikData().subscribe((res)=>{console.log(res);
    this.data=res;})
  }
}
