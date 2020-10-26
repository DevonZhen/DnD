import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, } from '@angular/forms';
import { RestfulService } from './../services/restful.service';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBagComponent } from '../dialog-bag/dialog-bag.component';
import { MatTableDataSource } from '@angular/material/table';


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
  anything:any;
  account:any="";
  name:any;
  charDisplay:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestfulService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    this.getGenders();
    this.getRaces();
    this.getClasses();
    // this.loadAccountInfo();
    this.buildCharacterForm();

    console.log("NEW NAME: "+this.getName());
    if(this.getName() === null)
      this.charDisplay=false;
    else
      this.charDisplay=true;
    
    this.getCharacterForm(this.getName());
    
  }

  buildCharacterForm(){
    this.characterForm = this.formBuilder.group({
      id: [''],
      name: [''],
      gender: [''],
      race: [''],
      class: [''],
      origin: [''],
      accId: ['']
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
          'origin': character.origin,
          'accId': character.accId
        });
      });     
  }
  
  getCharacterForm(name:any){
    this.restService.getCharacter(name).subscribe(
      data => { 
        this.loadCharacterForm(data);
        this.account=data;
        console.log("Char Variables: "+JSON.stringify(this.account));
      },
      err => {
        console.log("Error occured: getCharacterForm() failed")
      }
    );
  }

  /*---------------------------------------------------------------------*/
  getGenders(){
    this.restService.getGenderType()
    .subscribe(
      data => { 
        this.genders = data;
        //console.log("Gender Variables: "+JSON.stringify(data));
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
        //console.log("Races Variables: "+JSON.stringify(data));
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
       //console.log("Classes Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getClasses() failed")
      }
    );
  }
  /*---------------------------------------------------------------------*/
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
  //Opens Dailog Box
  BagsDialog(keys:any): void {
    const dialogRef = this.dialog.open(DialogBagComponent, {
      width: '850px', height: '700px',
      data: {key: keys}
    });
  }

  loadAccountInfo(){
    this.restService.getUsernamePassword(sessionStorage.getItem('username'), sessionStorage.getItem('password'))
    .subscribe(data=>{
      var characterData=[];
      characterData.push({
        "id":this.characterForm.value.id,
        "name":this.characterForm.value.name,
        "genderId":this.characterForm.value.gender,
        "raceId":this.characterForm.value.race,
        "classId":this.characterForm.value.class,
        "origin":this.characterForm.value.origin,
        "accId":this.characterForm.value.accId,
        "bags":[],
        "skillsList":[]
      })

      this.anything =JSON.stringify(data);
      console.log("Specific Account Data: "+this.anything);
      var dynamicCharacters={
        id: data.id,
        username: data.username,
        password: data.password,
        email: data.email,
        birthday: data.birthday,
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        characterList: characterData
      }
      console.log("Completion: "+JSON.stringify(dynamicCharacters))
      this.postCharacter(dynamicCharacters);
    });
  
  }

  postCharacter(formValue: any){
    // console.log("Buntun: "+JSON.stringify(formValue))
    this.restService.postCharacter(formValue).subscribe(
      data=>{
        if(data)
          alert("Character Send!");
        // else 
          // alert("Data not send")
        console.log("postCharacter() Successful!")
        this.router.navigate(['/characterslist']);
      }
    )
  }

  onSubmit(){
    
    console.log("Character Component Entering...")
    console.log("Form Data: "+JSON.stringify(this.characterForm.value))
    // console.log("Account: "+this.account);
    //Load and Post
    // this.loadAccountInfo();
  }
}
