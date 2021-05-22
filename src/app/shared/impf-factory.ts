import { Impfung } from './impfung';

export class ImpfFactory {

 static empty(): Impfung {
   //legt neue Dummy Impfung an
   return new Impfung(
     null, 
     new Date(), 
     0, 
     new Date(), 
     new Date(),
     null, 
     {id: 0, plz: 0, ort: '', strasse: '', bezeichnung: ''},
     []
     );
 }

 static fromObject(rawImpfung: any): Impfung {
   return new Impfung(
     rawImpfung.id,
     typeof(rawImpfung.datum) === 'string' ?
        new Date(rawImpfung.datum) : rawImpfung.datum,
     rawImpfung.max_personen,
     typeof(rawImpfung.uhrzeit_start) === 'string' ?
        new Date(rawImpfung.uhrzeit_start) : rawImpfung.uhrzeit_start,
    typeof(rawImpfung.uhrzeit_end) === 'string' ? new Date(rawImpfung.uhrzeit_end) : rawImpfung.uhrzeit_end,
     rawImpfung.impfort_id,
     rawImpfung.impfort,
     rawImpfung.users 
   );
 }
}