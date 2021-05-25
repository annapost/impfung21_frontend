import {Impfung, Impfort, User} from "../shared/impfung";
import {ImpfSystemService} from '../shared/impf-system.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: 'im-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: []
})
export class UserDetailComponent implements OnInit {
  user: User;
  impfung: Impfung;
  impfort: Impfort;

  constructor(
    private im: ImpfSystemService,
    private route: ActivatedRoute, 
    private router:Router,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params; //aktuelle Route wird geholt,
    let $uid = Number(this.findUserWithId());
    this.im.getUser($uid).subscribe(
      res => this.user = res);
      console.log(this.user);
  }

  findUserWithId(){
    return this.authService.getUserId();
  }
  
  getImpfort($ortId: umber){
    this.im.getOrt($ortId).subscribe(
      res => this.impfort = res);
      console.log();
    return this.impfort;
  }


}