import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, } from '@angular/forms';
import { RestfulService } from './../services/restful.service';
import { ActivatedRoute } from '@angular/router';


export interface GenderType {
  id: number;
  type: string;
}
export interface RaceType {
  id: number;
  type: string;
}
export interface ClassType {
  id: number;
  type: string;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  genders: GenderType[];
  races: RaceType[];
  classes: ClassType[];
  characterForm:FormGroup;
  events:any;
  account:any;

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestfulService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let temp_name='Thor';
    this.getGenders();
    this.getRaces();
    this.getClasses();
    this.buildCharacterForm();
    this.getCharacterForm(this.getName());
    // console.log("NEW NAME: "+this.getName());
  }

  buildCharacterForm(){
    this.characterForm = this.formBuilder.group({
      id: [''],
      name: [''],
      gender: [''],
      race: [''],
      class: [''],
      origin: ['']
    });
  }
  loadCharacterForm(data:any){
      data.characterList.forEach(character =>{
        this.characterForm.patchValue({
          'id': character.id,
          'name': character.name,
          'gender': character.genderId,
          'race': character.raceId,
          'class': character.classId,
          'origin': character.origin
        });
      });     
  }
  
  getCharacterForm(name:any){
    this.restService.getCharacter(name).subscribe(
      data => { 
        this.loadCharacterForm(data);
        this.account=data;
        console.log("Char Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getCharacterForm() failed")
      }
    );
  }

  getGenders(){
    this.restService.getGenderType()
    .subscribe(
      data => { 
        this.genders = data;
        console.log("Gender Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getGenders() failed")
      }
    );
  }
  getRaces(){
    this.restService.getRaceType()
    .subscribe(
      data => { 
        this.races = data;
        console.log("Races Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getRaces() failed")
      }
    );
  }
  getClasses(){
    this.restService.getClassType()
    .subscribe(
      data => { 
        this.classes = data;
        console.log("Classes Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getClasses() failed")
      }
    );
  }

  //Get Specific Character Name from Character List
  getName(){
    return this.route.snapshot.paramMap.get('name');
  }

  createCharacter(formValue: any){
    this.restService.newCharacter(formValue).subscribe(
      data => {
        
        console.log("Character "+data);
      },
      err => {
        console.log("Error occured: newCharacter() failed")
      }
    );
  }

  onSubmit(){
    console.log("Character Component Entering...")
    console.log("Form Data: "+JSON.stringify(this.characterForm.value))
  }
}
