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

  getSingle(isbn:string):Observable<Impfung>{
    return this.http.get<Impfung>(`${this.api}/impfungen/${isbn}`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> { return throwError(error);
}

}

