import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.LoginForm();
  }

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
      this.route.navigate(['/home']);
      
    }
    else{
      console.log("Incorrect User and/or Pass");
    }
  }

  onSubmit() {
    console.log("Login Form Values: "+JSON.stringify(this.loginForm.value));
    //Stores Login Values into SessionStorage
    this.storage(this.loginForm.get('username').value, this.loginForm.get('password').value);
    //Takes action to Route and unhide elements
    this.action();
  }
}
