import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hostURL:string = "http://localhost:8080/DnD";

  constructor(private http: HttpClient) { }

  //Login 
  getUsernamePassword(): Observable<any>{
    return this.http.get(this.hostURL+"/personAll");
  }

  //Collects Data from JSON <personall> or from DB
  geAccountAll(): Observable<any>{
    return this.http.get("assets/AccountAll.json");
    // return this.http.get(this.hostURL+"/AccountAll");
  }

  //Gender Type JSON Data
  getGenderType(): Observable<any>{
    return this.http.get("assets/genderType.json");
    // return this.http.get(this.hostURL+"/AccountAll");
  }

  //Class Type JSON Data
  getClassType(): Observable<any>{
    return this.http.get("assets/classType.json");
    // return this.http.get(this.hostURL+"/AccountAll");
  }

  //Race Type JSON Data
  getRaceType(): Observable<any>{
    return this.http.get("assets/raceType.json");
    // return this.http.get(this.hostURL+"/AccountAll");
  }

}
