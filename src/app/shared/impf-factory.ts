import { Impfung } from './impfung';

export class ImpfFactory {

 static empty(): Impfung {
   //legt neue Dummy Impfung an
   return new Impfung(null, new Date(), 0, new Date(), null, {id: 0, plz: 0, ort: '', strasse: '', bezeichnung: '', new Date()}, []);
 }

 static fromObject(rawImpfung: any): Impfung {
   return new Impfung(
     rawImpfung.id,
     typeof(rawImpfung.datum) === 'string' ?
        new Date(rawImpfung.datum) : rawImpfung.datum,
     rawImpfung.max_personen,
     typeof(rawImpfung.uhrzeit_start) === 'string' ?
        new Date(rawImpfung.uhrzeit_start) : rawImpfung.uhrzeit_start,
     rawImpfung.impfort_id,
     rawImpfung.impfort,
     rawImpfung.users,
     typeof(rawImpfung.uhrzeit_end === 'string' ? new Date(rawImpfung.uhrzeit_end) : rawImpfung.uhrzeit_end
   );
 }
}