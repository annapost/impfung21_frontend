import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'im-home',
  template: `<div class="ui container">
  <h1>Willkommen im Impfsystem von KWM</h1>
  <p>Such dir nach dem Login deinen Impfort</p>
  <a routerLink='../impfungen/ class='ui red button'>Impfliste anzeigen</a>
  </div> `,
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}