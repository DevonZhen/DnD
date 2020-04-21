import { Component, OnInit, Inject } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = sessionStorage.getItem("username");
  refreshed:any = false;
  count:number = 0;
  constructor(
    @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit(): void {
    console.log("Entering Home typescript: ");
    if(sessionStorage.getItem("username") == 'devon' && sessionStorage.getItem("password") == 'zhen'){
    this.action();
    }
  }
  action(){
    document.getElementById("mainBody").style.visibility  = "visible";
    document.getElementById("welcome").style.visibility  = "hidden";
  }

}
