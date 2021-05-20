

export class Impfung {
  constructor (
    public id:number, 
    public datum:Date, 
    public max_personen:number, 
    public uhrzeit_start:Time, 
    public uhrzeit_end:Time, 
    public impfort_id:Impfort){}
}