import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {Impfung, Impfort, User} from "../shared/impfung";
import {ImpfSystemService} from '../shared/impf-system.service';

@Component({
  selector: 'im-impf-list',
  templateUrl: './impf-list.component.html',
  styles: []
})
export class ImpfListComponent implements OnInit {
  

  constructor(private im: ImpfSystemService) { }

  impfungen: Impfung[];

  @Output() showDetailsEvent = new EventEmitter<Impfung>();


  ngOnInit() {
    this.im.getAll(). subscribe(res=> this.impfungen = res);
  }

  showDetails(impfung: Impfung){
    this.showDetailsEvent.emit(impfung);
  }

}