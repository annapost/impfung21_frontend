import {Impfung, Impfort, User} from "../shared/impfung";
import {ImpfSystemService} from '../shared/impf-system.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'im-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: []
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private im: ImpfSystemService,
    private route: ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params; //aktuelle Route wird geholt, 
    this.im.getUser(params['id']).subscribe(
      res => this.user = res);
  }

}