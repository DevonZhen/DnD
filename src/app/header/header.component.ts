import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SharedDataService } from './../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentStatus:any;
  constructor(private route: Router,
              @Inject(DOCUMENT) private document: Document,
              private sharedData: SharedDataService
              ){ 
 
  }

  ngOnInit(): void {
    console.log("Status: "+sessionStorage.getItem('login'))
    if(sessionStorage.getItem('account') === 'true')
      this.currentStatus=true;
    if(sessionStorage.getItem('account') === 'false')
      this.currentStatus=false;


    this.sharedData.loginStatus.subscribe(status =>{
      // alert("Hello: "+status);
      if(status!=''){
        sessionStorage.setItem("login",status);
        if(status === 'true')
          // console.log("loginStatus111: "+status)
          this.currentStatus=true;
        if(status === 'false')
          // console.log("loginStatus: "+status)
          this.currentStatus=false;
      }
    });

   
  }

  signOut(){
    console.log("Sign Out");
    sessionStorage.clear();
    this.sharedData.loginStatus.next('false');
    if(this.route.constructor.name == 'Router' ){
      this.route.navigate(['/home']);
      console.log("It worked!")
    }  
  }
}
