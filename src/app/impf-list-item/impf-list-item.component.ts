import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpfSystemService } from '../shared/impf-system.service';
import {Impfung} from "../shared/impfung";

@Component({
  selector: 'a.im-impf-list-item',
  templateUrl: './impf-list-item.component.html',
  styleUrls: []
})
export class ImpfListItemComponent implements OnInit {
  @Input() impfung: Impfung

  constructor(
    private im: ImpfSystemService, 
    private route: ActivatedRoute, 
    private router:Router) { }

  ngOnInit() {
  }

//TODO - wie speichere ich User und Impfung zusammen?? - ImpfId übergeben??
  signToImpfung(){
    if (confirm('Wirklich zu dieser Impfung anmelden?')) {
      this.im.addUser(this.user.id)
      .subscribe(res => this.router.navigate(['../'], 
      { 
        relativeTo: this.route 
        })); 
        }
    }
  }


}