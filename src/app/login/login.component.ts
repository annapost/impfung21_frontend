import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'im-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

loginForm : FormGroup;

  constructor() { }

  ngOnInit() {
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
}