import { Component, OnInit } from '@angular/core';
import {Impfung, Impfort, User} from "../shared/impfung";

@Component({
  selector: 'im-impf-list',
  templateUrl: './impf-list.component.html',
  styleUrls: []
})
export class ImpfListComponent implements OnInit {

  constructor() { }

  impfungen: Impfung[];

  ngOnInit() {
  }

}