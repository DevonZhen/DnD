import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RestfulService } from './../services/restful.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  account:any = "";
  constructor(
    private restService: RestfulService,
    private route: Router,
    private snack: MatSnackBar
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
        // console.log("List Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getCharacterList() failed")
      }
    );
  }

  deleteCharacter(data:any){
    console.log("Deleting "+data)
    this.restService.deleteCharacter(data).subscribe(
      data=>{
        if(data)
          this.snack.open("Character Deleted!",'',{duration: 5000, panelClass: ['mat-toolbar', 'mat-primary']});
        else
          this.snack.open("Character Deleted!",'',{duration: 5000, panelClass: ['mat-toolbar', 'mat-primary']});
      },
      err => {
        console.log("Error occured: deleteCharacter() Failed")
      });
    console.log("Character Deleted")
  }
}
