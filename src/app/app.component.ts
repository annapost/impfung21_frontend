import { Component, VERSION } from '@angular/core';
import {Impfung} from "./shared/impfung";

@Component({
  selector: 'im-root',
  template: '<im-impf-list></im-impf-list>',
  styles: []
})
export class AppComponent  {
  listOn = true;
  detailsOn = false;

  impfung: Impfung;
  
}
