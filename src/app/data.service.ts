import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private id:any=new BehaviorSubject('');
  private currentId=this.id.asObservable();

  private data:any=new BehaviorSubject('');
  private currentData=this.data.asObservable();

  
  constructor(private http:HttpClient) { this.getMumbaiData(); this.getNashikData(); this.getBangloreData(); this.getPuneData();
  }
  putMethodsData(){
    return this.currentId,
           this.currentData;
  }
  valueStore(id:any,data:any){
    this.id.next(id);
    this.data.next(data);
  }
  postMethod(insertData:any){
    return this.http.post('http://localhost:3000/api/insertCourses' , insertData);
  }
  getPuneData(){
    return this.http.get('http://localhost:3000/api/getPuneBuilders');
  }

  getMumbaiData(){
    return this.http.get('http://localhost:3000/api/getAllcities');
  }

  getNashikData(){
    return this.http.get('http://localhost:3000/api/getNashikBuilders');
  }
  getBangloreData(){
    return this.http.get('http://localhost:3000/api/getBangalorebuilders')
  }
  
}
