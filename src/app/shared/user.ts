import { Impfung } from "./impfung";
export { Impfung } from "./impfung";

export class User {
  constructor (
    public id:number, 
    public svnr:string, 
    public vorname:string, 
    public nachname:string, 
    public geb_datum:Date, 
    public email:string,
    public status:string,
    public rolle:string,
    public strasse:string,
    public plz:string,
    public ort:string,
    public password:string,
    public email_verified_at?:Date,
    public telefon?:string,
    public impfung_id?:number,
    public impfung?:Impfung,
    ){}
}