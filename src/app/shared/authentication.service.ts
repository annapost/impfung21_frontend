import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

interface Token {
  exp: number;
  user: {
    id: string;
    rolle: string;
  };
}

@Injectable()
export class AuthenticationService {
  private api: string =
    'https://impfung21.s1810456026.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) {}

  //post-call auf die auth-login methode + Objekt mitgeben wo wir email u. pw reinsetzen
  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public setLocalStorage(token: string) {
    localStorage.setItem('token', token);
    const decodedToken = jwt_decode(token) as Token;
    localStorage.setItem('userId', decodedToken.user.id);
    localStorage.setItem('rolle', decodedToken.user.rolle);
  }

  public logout() {
    this.http.post(`${this.api}/logout`, {});
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('rolle');
  }

  public isLoggedIn() {
    if (localStorage.getItem('token')) {
      //wenn Token gefunden - dann holen wir uns den
      let token = localStorage.getItem('token');
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      //console.log(expirationDate);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log('Token expired');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeitem('rolle');
        return false;
      }
      return true; // noch nicht abgelaufen
    }
    return false;
  }

  public isAdminLoggedIn() {
  
    if (localStorage.getItem('token') && localStorage.getItem('rolle') == "admin") {
      let token = localStorage.getItem('token');
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      //console.log(expirationDate);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log('Token expired');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeitem('rolle')
        return false;
      }
      return true;
    }
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
