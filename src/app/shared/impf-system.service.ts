import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Impfung, Impfort, User} from "./impfung";

@Injectable()
export class ImpfSystemService {
  private api = "https://impfung21.s1810456026.student.kwmhgb.at/api";
  constructor(private http:HttpClient) { }


  getAll():Observable<Array<Impfung>>{
    return this.http.get<Array<Impfung>>(`${this.api}/impfungen`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  getSingle(id:number):Observable<Impfung>{
    return this.http.get<Impfung>(`${this.api}/impfungen/${id}`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

    getUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.api}/user/${id}`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  remove(id:Number):Observable<any>{
    return this.http.delete<Impfung>(`${this.api}/impfung/${id}`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(impfung:Impfung):Observable<any>{
    return this.http
      .post(`${this.api}/impfung`, impfung)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

    update(impfung:Impfung):Observable<any>{
      return this.http
        .put(`${this.api}/impfung/${impfung.id}`, impfung)
        .pipe(retry(3))
        .pipe(catchError(this.errorHandler));
  }


  private errorHandler(error: Error | any): Observable<any> { 
    return throwError(error);
  }

}

