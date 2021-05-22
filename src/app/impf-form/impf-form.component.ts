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

@Component({
  selector: 'im-impf-form',
  templateUrl: './impf-form.component.html',
  styleUrls: []
})
export class ImpfFormComponent implements OnInit {
  impfForm: FormGroup;
  impfung = ImpfFactory.empty();
  //unterscheidung, ob ich bereits ein Buch habe, oder eines neu anlegen will
  isUpdatingImpfung = false;
  errors: { [key: string]: string } = {};
  impforte: FormArray;

  constructor(
    private fb: FormBuilder,
    private bs: ImpfSystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const isbn = this.route.snapshot.params["isbn"];
    if (isbn) {
      this.isUpdatingImpfung = true;
      this.bs.getSingle(isbn).subscribe(impfung => {
        this.impfung = impfung;
        this.initImpfung();
      });
    }
    this.initImpfung();
  }

  initImpfung() {
  //this.buildThumbnailsArray();
  //hier bauen wir unser Formular Model
  this.impfForm = this.fb.group({
    id: this.impfung.id,
    //formgruppe braucht objekt - wir sagen ihm welche formularfelder dazugehören - Labelnamen aus HTML nehmen
    datum: [this.impfung.datum, Validators.required],
    uhrzeit_start: [
      this.impfung.uhrzeit_start, 
      Validators.required,
      ],
    uhrzeit_end: [this.impfung.uhrzeit_end, Validators.required],
    impforte: Validators.required,
    max_personen: [
      Validators.required,
      Validators.min(this.impfung.users.length),]
  });
  //validator immer aktuell halten:
  this.impfForm.statusChanges.subscribe(() => {
    //this.updateErrorMessages();
  });
}

  /*updateErrorMessages() {
    this.errors = {};
    for (const message of impfungFormErrorMessages) {
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
  }*/

  submitForm() {
    console.log(this.impfForm.value);

    //fitlers null values
    this.impfForm.value.images = this.impfForm.value.images.filter(
      thumbnail => thumbnail.url
    );

    const updatedImpfung: Impfung = ImpfFactory.fromObject(this.impfForm.value);
    console.log(updatedImpfung);

    //in unserer Lösung ein Hack:
    //just a hack - did not care about authors
    //damit sie beim speichern trdm wieder da sind:
    //TODO - impfort change etc. beachten
    //updatedimpfung.authors = this.impfung.authors;
    //updatedimpfung.user_id = 1; //hack

    if (this.isUpdatingImpfung) {
      this.bs.update(updatedImpfung).subscribe(res => {
        this.router.navigate(["../../impfungen", updatedImpfung.id], {
          relativeTo: this.route
        });
      }, (err)=>{
        //TODO sinnvolle Fehlermeldung -> irgendwas mit Promises -> für Fehlermeldungen vom Server?/Client?
      });
    } else {
      this.bs.create(updatedImpfung).subscribe(res => {
        this.router.navigate(["../impfungem"], { relativeTo: this.route });
      });
    }
  }

}