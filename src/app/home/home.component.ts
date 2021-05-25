import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Impfung } from '../shared/impfort';

@Component({
  selector: 'im-home',
  templateUrl: './home.component.html', 
  styleUrls: []
})
export class HomeComponent implements OnInit {
  

  constructor(
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}