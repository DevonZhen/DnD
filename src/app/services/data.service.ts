import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hostURL:string = "http://localhost:8080/Character";

  constructor(private http: HttpClient) { }

  //Login 
  getUsernamePassword(username:any, password:any): Observable<any>{
    // return this.http.get("assets/Account.json");
    return this.http.get(this.hostURL+"/Login/"+username+"/"+password);
  }
  // getUsernamePassword(): Observable<any>{
  //   return this.http.get("assets/Account.json");
  //   // return this.http.get(this.hostURL+"/Login/"+username+"/"+password);
  // }

  //Collects Data from JSON <personall> or from DB
  geAccountAll(): Observable<any>{
    return this.http.get("assets/AccountAll.json");
    // return this.http.get(this.hostURL+"/AccountAll");
  }

  //Get Specific Account <----
  // getAccount(): Observable<any>{
  //   return this.http.get("assets/Account.json");
  //   // return this.http.get(this.hostURL+"/Account/");
  // }
  getAccount(username:any, password:any): Observable<any>{
    // return this.http.get("assets/Account.json");
    return this.http.get(this.hostURL+"/Login/"+username+"/"+password);
  }


  //Get List of Characters from Account
  getAccounCharacters():  Observable<any>{
    return this.http.get("assets/AccountCharacters.json");
    // return this.http.get(this.hostURL+"/CharacterList/"+username");
  }

  //Get Bags by Character
  getCharacterBag():  Observable<any>{
    return this.http.get("assets/CharacterBag.json");
    // return this.http.get(this.hostURL+"/CharacterBag");
  }

  //Get Character Skills  <----
  getCharacterSkills(name:any):  Observable<any>{
    // return this.http.get("assets/characterskills.json");
    return this.http.get(this.hostURL+"/Skills/"+name);
  }

  //Get Character <----
  getCharacter(name: any):  Observable<any>{
    // return this.http.get("assets/character.json");
    return this.http.get(this.hostURL+"/About/"+name);
  }
   //Get Character List TEMP <----
   getCharacterList(username:any):  Observable<any>{
    // return this.http.get("assets/character.json");
    return this.http.get(this.hostURL+"/CharacterList/"+username);
  }


  /*----------------------------------------------------*/
  //Status Type JSON Data
  getStatusType(): Observable<any>{
    return this.http.get("assets/statusType.json");
    // return this.http.get(this.hostURL+"/statusType");
  }
  //Gender Type JSON Data
  getGenderType(): Observable<any>{
    return this.http.get("assets/genderType.json");
    // return this.http.get(this.hostURL+"/genderType");
  }
  //Class Type JSON Data
  getClassType(): Observable<any>{
    return this.http.get("assets/classType.json");
    // return this.http.get(this.hostURL+"/classType");
  }
  //Race Type JSON Data
  getRaceType(): Observable<any>{
    return this.http.get("assets/raceType.json");
    // return this.http.get(this.hostURL+"/raceType");
  }
  //Skill Type JSON Data
  getSkillType(): Observable<any>{
    return this.http.get("assets/skillType.json");
    // return this.http.get(this.hostURL+"/skillType");
  }
  /*----------------------------------------------------*/

  //New Account
  newAccount(formData: any): Observable<any>{
    return this.http.post(this.hostURL+"/PostAccount",formData);
  }

  //New Character
  newCharacter(formData: any): Observable<any>{
    // return this.http.get(this.hostURL+"/newCharacter/",formData);
    return null;
  }

  //Remove Account
  deleteAccount(id: string): Observable<any>{
    return this.http.delete(this.hostURL+"/DeleteAccount/"+id);
    // return null;
  }
}
