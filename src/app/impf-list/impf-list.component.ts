import { Component, OnInit } from '@angular/core';
import {Impfung, Impfort, User} from "../shared/impfung";

@Component({
  selector: 'im-impf-list',
  templateUrl: './impf-list.component.html',
  styleUrls: []
})
export class ImpfListComponent implements OnInit {

  constructor() { }

  impfungen: Impfung[];

  ngOnInit() {
    this.impfungen = [
    new Impfung(
      1,
      "2021-05-20",
        25,
        "14:00:00",
        "17:00:00",
        1,
        [new Impfort(
            1,
            4188,
            "Steinerkirchen",
            "Straße 55",
            "Feuerwehrhaus Tor 2")
    ],
    )
    ]
  }

}