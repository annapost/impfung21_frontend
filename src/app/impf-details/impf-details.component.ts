import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpfSystemService } from '../shared/impf-system.service';
import {Impfung} from "../shared/impfung";

@Component({
  selector: 'im-impf-details',
  templateUrl: './impf-details.component.html',
  styleUrls: []
})
export class ImpfDetailsComponent{
  @Input() impfung: Impfung;
  @Output() showListEvent = new EventEmitter<any>();

constructor(
    private im: ImpfSystemService, 
    private route: ActivatedRoute, 
    private router:Router) { }
  
  showImpfungList(){
    this.showListEvent.emit();
  }

}