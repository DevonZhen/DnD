import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestfulService } from './../services/restful.service';
import { SharedDataService } from './../services/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  display: boolean;
  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private restService: RestfulService,
    private sharedData: SharedDataService,
    private snack: MatSnackBar,
  ) { }

  LoginForm(){
    this.loginForm=this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loadForm(){
    this.loginForm.setValue({
      username: "Devonzhen",
      password: "devon123"
    });
  }

  //Validation Only
  get username(){
    return this.loginForm.get('username');
  }
  //Validation Only
  get password(){
    return this.loginForm.get('password');
  }

  //Check Username and Password validation
  getUserPass(username:any, password:any){
    this.restService.getUsernamePassword(username, password).subscribe(
      data => {
        console.log("Load Details: "+JSON.stringify(data));
        if(data.username===null && data.password===null || data.username==='' && data.password===''){
          console.log("Login Failed")
          this.snack.open("Login Failed",'',{duration: 5000, panelClass: ['mat-toolbar', 'mat-primary']});
        }
        else{
          //Store successful login info
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("password", data.password);
          sessionStorage.setItem("account", 'true');
          //Sets SharedData Login Status = True
          this.sharedData.loginStatus.next('true');
          //Goes to Home Page
          this.route.navigate(['/home']);

        }
      },
      err => {
        console.log("Error occured: getAccountForm() Failed")
      }
    );
  }

  ngOnInit(): void {
    this.LoginForm();
    this.loadForm();
  }

  onSubmit() {
    console.log("Login Form Values: "+JSON.stringify(this.loginForm.value));
    //Check User/Pass in DB & stores in SessionStorage
    this.getUserPass(this.loginForm.get('username').value, this.loginForm.get('password').value);
  }
}
