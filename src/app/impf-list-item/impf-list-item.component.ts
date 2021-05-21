import { Component, OnInit, Input } from '@angular/core';
import {Impfung} from "../shared/impfung";

@Component({
  selector: 'a.im-impf-list-item',
  templateUrl: './impf-list-item.component.html',
  styleUrls: []
})
export class ImpfListItemComponent implements OnInit {
  @Input() impfung: Impfung

  constructor() { }

  ngOnInit() {
  }

}