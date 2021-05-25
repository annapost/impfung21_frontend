import { Impfort } from './impfort';

export class ImpfortFactory {

 static empty(): Impfort {
   return new Impfort(
     null, 
     0, 
     '', 
     '', 
     '',
     []
     );
 }

 static fromObject(rawImpfort: any): Impfort {
   return new Impfort(
     rawImpfort.id,
     rawImpfort.plz,
     rawImpfort.ort,
     rawImpfort.bezeichnung,
     rawImpfort.impfungen
   );
 }
}