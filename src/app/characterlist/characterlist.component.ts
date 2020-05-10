import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RestfulService } from './../services/restful.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  account:any;
  constructor(
    private restService: RestfulService,
    private route: Router,
    ) { }

  ngOnInit(): void {
    let user = sessionStorage.getItem("username");
    this.loadCharacterList(user);
  }
  
  loadCharacterList(username:any){
    this.restService.getCharacterList(username)
    .subscribe(
      data => { 
        this.account = data;
        console.log("List Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getCharacterList() failed")
      }
    );
  }
}
