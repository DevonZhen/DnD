import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { SharedDataService } from './../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = sessionStorage.getItem("username");
  display:any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sharedData: SharedDataService
    ) { }

  ngOnInit(): void {
    console.log("Entering Home Component: ")
    if(sessionStorage.getItem('account') === 'true')
      this.display=true;
    if(sessionStorage.getItem('account') === 'false' || sessionStorage.getItem('account') === "null")
      this.display=false;

  }
}
