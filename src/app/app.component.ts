import { Component} from '@angular/core';
import {Impfung} from "./shared/impfung";

@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
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
