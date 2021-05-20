import { Impfung } from "./impfung";
export { Impfung } from "./impfung";

export class Impfort{
    constructor (
    public id:number, 
    public plz:number, 
    public ort:string, 
    public strasse:string, 
    public bezeichnung:string,
    public impfungen?:Impfung[]
    ){}
}