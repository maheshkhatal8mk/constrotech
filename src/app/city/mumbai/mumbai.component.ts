import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {
  public data:any;
  
  constructor(private ser:DataService) {this.getMumbaidata(); }

  ngOnInit(): void {
  }

  getMumbaidata(){
    this.ser.getMumbaiData().subscribe((res)=>{console.log(res);
    this.data=res;})
  }
  

}
