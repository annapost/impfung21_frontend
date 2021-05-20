import { User } from "./user";
import { Impfort } from "./impfort";
export { Impfort } from "./impfort";
export { User } from "./user";


export class Impfung {
  constructor (
    public id:number, 
    public datum:Date, 
    public max_personen:number, 
    public uhrzeit_start:Date, 
    public uhrzeit_end:Date, 
    public impfort_id:number,
    public impfort:Impfort,
    public users?:User[]
    ){}
}