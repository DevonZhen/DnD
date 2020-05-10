import { Component, OnInit } from '@angular/core';
import { RestfulService } from './../services/restful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  events:any;
  
  constructor(private restService: RestfulService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // let temp_name:String = 'Thor';
    
    this.getSkills(this.getName());
    console.log("NSkil NAME: "+this.getName());
  }

  getSkills(name:any){
   this.restService.getCharacterSkills(name).subscribe(
      data => { 
        this.events = data;
        console.log("Skills Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getBags() failed")
      }
    );
  }

  //Get Specific Character Name from Character List
  getName(){
    return this.route.snapshot.paramMap.get('name');
  }

}
