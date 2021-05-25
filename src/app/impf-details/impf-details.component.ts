import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpfFactory } from '../shared/impf-factory';
import { ImpfSystemService } from '../shared/impf-system.service';
import {Impfung} from "../shared/impfung";

@Component({
  selector: 'im-impf-details',
  templateUrl: './impf-details.component.html',
  styleUrls: []
})
export class ImpfDetailsComponent{
  impfung:Impfung = ImpfFactory.empty();

  //@Input() impfung: Impfung;
  @Output() showListEvent = new EventEmitter<any>();

constructor(
    private im: ImpfSystemService, 
    private route: ActivatedRoute, 
    private router:Router) { }
  
  showImpfungList(){
    this.showListEvent.emit();
  }

  ngOnInit() {
    const params = this.route.snapshot.params; //aktuelle Route wird geholt, 
    this.im.getSingle(params['id']).subscribe(
      res => this.impfung = res);
  }
  
  removeImpfung() {
    if (confirm('Diese Impfung wirklich löschen?')) {
      this.im.remove(this.impfung.id)
      .subscribe(res => this.router.navigate(['../'], 
      { 
        relativeTo: this.route 
        })); 
        }
    }

    updateUserState($id) {
      console.log($id);
    if (confirm('Status wirklich ändern?')) {
      this.im.updateUser($id)
      .subscribe(res => this.router.navigate(['./'], 
      { 
        relativeTo: this.route 
        })); 
        }
    }

}