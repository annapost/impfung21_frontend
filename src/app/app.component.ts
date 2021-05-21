import { Component, VERSION } from '@angular/core';
import {Impfung} from "./shared/impfung";

@Component({
  selector: 'im-root',
  template: `
  <im-impf-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></im-impf-list>
  <im-impf-details *ngIf="detailsOn" [impfung]="impfung" (showListEvent)="showList()"></im-impf-details>
  `,
  styles: []
})
export class AppComponent  {
  listOn = true;
  detailsOn = false;

  impfung: Impfung;

  showList(){
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(impfung: Impfung){
    this.impfung = impfung;
    this.listOn = false;
    this.detailsOn = true;
  }
  
}
