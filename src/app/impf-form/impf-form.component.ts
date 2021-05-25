import { Component, OnInit } from '@angular/core';
import { FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpfFactory } from '../shared/impf-factory';
import { ImpfSystemService } from '../shared/impf-system.service';
import { Impfung } from '../shared/impfung';
import { Impfort } from '../shared/impfort';
import { ImpfFormErrorMessages } from "./impf-form-error-messages";
import { ImpfortFactory } from '../shared/impfort-factory';

@Component({
  selector: 'im-impf-form',
  templateUrl: './impf-form.component.html',
  styleUrls: []
})
export class ImpfFormComponent implements OnInit {
  impfForm: FormGroup;
  impfung = ImpfFactory.empty();
  impfort = ImpfortFactory.empty();
  
  isUpdatingImpfung = false;
  errors: { [key: string]: string } = {};
  impforte: FormArray;
  

  constructor(
    private fb: FormBuilder,
    private im: ImpfSystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingImpfung = true;
      this.im.getSingle(id).subscribe(impfung => {
        this.impfung = impfung;
        this.impfort = impfung.impfort;
        this.initImpfung();
        
      });
    }
    this.initImpfung();
  }

  initImpfung() {
  this.impfForm = this.fb.group({
    id: this.impfung.id,
    datum: [this.impfung.datum, Validators.required],
    uhrzeit_start: [
      this.impfung.uhrzeit_start, 
      Validators.required,
      ],
    uhrzeit_end: [
      this.impfung.uhrzeit_end, 
      Validators.required],
    plz: [this.impfung.impfort.plz, Validators.required],
    strasse: [this.impfung.impfort.strasse, Validators.required],
    ort: [this.impfung.impfort.ort, Validators.required],
    bezeichnung: [this.impfung.impfort.bezeichnung, Validators.required],
    max_personen: [
      //this.impfung.max_personen,
      Validators.required,
      Validators.min(this.impfung.users.length),],
  });
  //validator immer aktuell halten:
  this.impfForm.statusChanges.subscribe(() => {
    this.updateErrorMessages();
  });
}

  updateErrorMessages() {
    this.errors = {};
    for (const message of ImpfFormErrorMessages) {
      const control = this.impfForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    console.log(this.impfForm.value);

    const updatedImpfung: Impfung = ImpfFactory.fromObject(this.impfForm.value);
    const impfOrt: Impfort = ImpfortFactory.fromObject(this.impfForm.value);
    console.log(updatedImpfung);

  
    updatedImpfung.users = this.impfung.users;

    if (this.isUpdatingImpfung) {
      this.im.createOrt(impfOrt).subscribe(res => {
        this.im.update(updatedImpfung).subscribe(res => {
          this.router.navigate(["../../impfungen", impfOrt.id], {
            relativeTo: this.route
        });
      });
      });
    } else {
      this.im.createOrt(impfOrt).subscribe(res => {
        this.im.create(updatedImpfung).subscribe(res => {
          this.router.navigate(["../impfungen"], { relativeTo: this.route });
        });
    });
    }
  }

}