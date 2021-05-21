import {Impfung, Impfort, User} from "../shared/impfung";
import {ImpfSystemService} from '../shared/impf-system.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'im-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: []
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  users: User[];

  ngOnInit() {
  }

}