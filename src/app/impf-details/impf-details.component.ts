import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Impfung} from "../shared/impfung";

@Component({
  selector: 'app-impf-details',
  templateUrl: './impf-details.component.html',
  styleUrls: []
})
export class ImpfDetailsComponent{
  @Input() impfung: Impfung;
  @Output() showListEvent = new EventEmitter<any>();

  
  showImpfungList(){
    this.showListEvent.emit();
  }

}