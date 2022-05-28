import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.css']
})
export class BangaloreComponent implements OnInit {
  public data:any;

  constructor(private serv:DataService) { this.getBangloreData();}

  ngOnInit(): void {
  }
  getBangloreData(){
    this.serv.getBangloreData().subscribe((res)=>{console.log(res);
      this.data=res;}
    )
  }
}
