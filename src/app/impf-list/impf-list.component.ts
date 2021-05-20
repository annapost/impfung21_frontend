import { Component, OnInit } from '@angular/core';
import {Impfung, Impfort, User} from "../shared/impfung";
import {ImpfSystemService} from '../shared/impf-system.service';

@Component({
  selector: 'im-impf-list',
  templateUrl: './impf-list.component.html',
  styles: []
})
export class ImpfListComponent implements OnInit {

  constructor(private im: ImpfSystemService) { }

  impfungen: Impfung[];

  ngOnInit() {
    //this.impfungen = this.im.getAll();

  }

  showDetails(impfung: Impfung){
    //TODO - Seite 41
  }

}