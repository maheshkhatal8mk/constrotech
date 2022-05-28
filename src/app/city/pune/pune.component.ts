import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {
  public data:any;

  constructor(private ser:DataService) {this.getPuneData(); }

  ngOnInit(): void {
  }
  getPuneData(){
    this.ser.getPuneData().subscribe((res: any)=>{console.log(res);
      this.data=res;})
    }
    
  }


