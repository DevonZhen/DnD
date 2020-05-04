import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestfulService } from './../services/restful.service';
import { SharedDatService } from 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private restService: RestfulService
  ) { }

  LoginForm(){
    this.loginForm=this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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

  storage(username:any, password:any){
    
    console.log("Inside Storage Function:  ");
    console.log("Initial Username: "+JSON.stringify(username)+" Initial Password: "+JSON.stringify(password));
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    for (let i = 0; i < sessionStorage.length; i++){
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      console.log(key, value);
    }
    // sessionStorage.clear();
  }
  
  action(){
    let user = sessionStorage.getItem("username");
    let pass = sessionStorage.getItem("password");
    console.log("Action user: "+user +" Action pass: "+pass);
    
    if(user == 'devon' && pass == 'zhen'){
      document.getElementById("navbarNavAltMarkup").style.visibility  = "visible";
      this.route.navigate(['/home']).then(() => {location.reload()});
      
    }
    else{
      console.log("Incorrect User and/or Pass");
    }
  }

  //Check Username and Password validation
  getUserPass(username:any, password:any){
    this.restService.getUsernamePassword(username,password).subscribe(
      data => { 
        console.log("Load Details: "+JSON.stringify(data));
        if(data.username==null && data.password==null || data.username=='' && data.password==''){
          console.log("Login Failed")
        }
        else{
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("password", password);
        }
      },
      err => {
        console.log("Error occured: getAccountForm() Failed")
      }
    );
  }


  ngOnInit(): void {
    this.LoginForm();
    let user = sessionStorage.getItem("username");
    let pass = sessionStorage.getItem("password");
    console.log("User: "+user+ "Pass: "+pass);
    if(user!=null){
      // this.route.navigate(['header']);
      document.getElementById("mainBody").style.visibility  = "visible";
    }
  }



  onSubmit() {
    console.log("Login Form Values: "+JSON.stringify(this.loginForm.value));
    //Check User/Pass in DB & stores in SessionStorage
    this.getUserPass(this.loginForm.get('username').value, this.loginForm.get('password').value);
    //Stores Login Values into SessionStorage
    this.storage(this.loginForm.get('username').value, this.loginForm.get('password').value);
    //Takes action to Route and unhide elements
    this.action();
  }
}
