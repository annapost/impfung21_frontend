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
      "2021-05-29",
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
    ],)
        new Impfung(
      2,
      "2021-06-30",
        120,
        "08:00:00",
        "17:00:00",
        2,
        [new Impfort(
            2,
            4552,
            "Waldhausen",
            "Straße 1",
            "Veranstaltungszentrum Halle 1a")
    ],)
    ]
  }

}