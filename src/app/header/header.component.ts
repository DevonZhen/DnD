import { Component, OnInit , Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  updateFlag:boolean = false;
  count:number = 0;
  constructor(
    private route: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }


  ngOnInit(): void {
    // this.action();

    let user = sessionStorage.getItem("username");
    let pass = sessionStorage.getItem("password");
    // if(user == 'devon' && pass == 'zhen'){
    //   document.getElementById("mainBody").style.visibility  = "visible";
    // }
    if(user!=null){
      // this.route.navigate(['header']);
      this.updateFlag=true;
      document.getElementById("mainBody").style.visibility  = "visible";
    }
   



  }

  signOut(){
    console.log("Sign Out");
    sessionStorage.clear();
    document.getElementById("navbarNavAltMarkup").style.visibility  = "hidden";
    //Actual Page
    this.route.navigate(['/home']);

  }
}
