import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestfulService } from './../services/restful.service';
import { formatDate } from '@angular/common';
import { SharedDataService } from './../services/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface StatusType {
  id: number;
  type: string;
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  character:boolean = false;
  register:boolean;
  
  statusTypes:StatusType[];
  AccountForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private restService: RestfulService,
              private route: Router,private sharedData: SharedDataService,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
    console.log("Account TS Starts Here: ");
    let user = sessionStorage.getItem("username");
    let pass = sessionStorage.getItem("password");
    this.getStatusType();
    this.buildAccountForm();
    if(sessionStorage.getItem('account') === 'true'){
      this.getAccountForm(user,pass);
      this.register=true;
    }
  }

  buildAccountForm(){
    this.AccountForm = this.formBuilder.group({
      id: [''],
      username: [''],
      password: [''],
      email: [''],
      firstName: [''],
      lastName: [''],
      birthday: [new Date()],
      country: [''],
      statusId: ['']
    });
  }
  
  loadAccountForm(data: any){
    this.AccountForm.patchValue({
      'id': data.id,
      'username': data.username,
      'password': data.password,
      'email': data.email,
      'firstName': data.firstName,
      'lastName': data.lastName,
      'birthday': formatDate(data.birthday, 'yyyy-MM-ddT00:00:00', 'en-US'),
      'country': data.country,
      'statusId': data.statusId
    });
  }
  
  getAccountForm(username:any, password:any){
    this.restService.getAccount(username,password).subscribe(
      data => { 
        this.loadAccountForm(data);
        console.log("Load Details: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getAccountForm() Failed")
      }
    );
  }

  //Validation Only
  get password(){
    return this.AccountForm.get('password');
  }

  getStatusType(){
    this.restService.getStatusType()
    .subscribe(
      data => { 
        this.statusTypes = data;
        console.log("Status Type Variables: "+JSON.stringify(data));
      },
      err => {
        console.log("Error occured: getStatusType() failed")
      }
    );
  }
  
  registerAccount(formValue: any){
    this.restService.newAccount(formValue).subscribe(
      data =>{
        console.log("Account "+data);
        if (data) {
          this.snack.open("Account Data Saved", 'close',  {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'] // 'mat-accent' or 'mat-warn'
          });
        } 
        else {
          this.snack.open("Account Data Saved But Not Returned", 'close',  {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-warn'] // 'mat-accent' or 'mat-warn'
          });
        }
       console.log("POST Request is successful ", data);
      },
      err => {
        console.log("Error occured: newAccount() failed",err)
      }
    );
  }

  deleteAccount(){
    let id:string = this.AccountForm.value.id;
    console.log("Delete Id : "+id);
    this.restService.deleteAccount(id).subscribe(
      data=>{
        this.snack.open("Account  Deleted", 'close',  {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-warn'] // 'mat-accent' or 'mat-warn'
        });
        sessionStorage.clear();
        this.sharedData.loginStatus.next('false');
        this.route.navigate(['/home']);
      },
      err => {
        console.log("Error occured: deleteAccount() failed",err)
      }
    );

  }

  onSubmit(){
    console.log("Account Component Entering...")
    console.log("Form Data: "+JSON.stringify(this.AccountForm.value))
    this.registerAccount(this.AccountForm.value);
  }
}
