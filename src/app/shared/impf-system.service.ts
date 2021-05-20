import { Injectable } from '@angular/core';
import {Impfung, Impfort, User} from "./impfung";

@Injectable()
export class ImpfSystemService {
  impfungen: Impfung[];

  constructor() {

  }

  getAll(){
    return this.impfungen;
  }

}

