import { Component, OnInit, Input } from '@angular/core';
import {Impfung} from "../shared/impfung";

@Component({
  selector: 'app-impf-details',
  templateUrl: './impf-details.component.html',
  styleUrls: []
})
export class ImpfDetailsComponent{
  @Input() impfung: Impfung

  

}