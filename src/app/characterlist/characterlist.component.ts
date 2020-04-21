import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { RestfulService } from './../services/restful.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {

  // constructor() { }

  constructor() { }

  ngOnInit(): void {
  }
  info: any;
  
  // getAccountAll(){
  //   console.log("(Account All) Starts Here");
  //   this.restService.getAccountAll()
  //   .subscribe(
  //     data => { 
  //       this.info = data;
  //       console.log("(Account All) Data: "+JSON.stringify(data));
  //     },
  //     err => {
  //       console.log("Error occured: getAccountAll()")
  //     }
  //   );
  // }

  //Gender
  //Loads the JSON/Dynamic data from Restful <Person Type>
  // getGenderType(){
  //   this.restService.getGenderType()
  //   .subscribe(
  //     data => { 
  //       this.personTypes = data;
  //       console.log("Gender Type: "+JSON.stringify(data));
  //     },
  //     err => {
  //       console.log("Error occured: GenderType() failed")
  //     }
  //   );
  // }

  sessionTest(){
    let result = sessionStorage.getItem("username");
    console.log("SessionTest username: "+result);
  }

  onSubmit(){
    this.sessionTest();
  }


}
