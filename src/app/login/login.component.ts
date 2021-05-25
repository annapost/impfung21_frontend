import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


//für login
interface Response{
  access_token: string;
}


@Component({
  selector: 'im-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthenticationService) {


  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required, Validators.email],
      password:["", Validators.required]
    })
  }


login(){
    const val = this.loginForm.value;
    /*if(val.username && val.password){
      this.authService.login(val.username, val.password).subscribe(
        (res) => {
          this.authService.setLocalStorage((res as Response).access_token);
        }
      )
    };*/ //das setzt nacher unseren REST call ab, auf den wir und subscriben
  }


  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }
  
}