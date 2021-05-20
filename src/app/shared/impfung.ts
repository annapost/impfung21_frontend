

export class Impfung {
  constructor (
    public id:number, 
    public datum:date, 
    public max_personen:number, 
    public uhrzeit_start:time, 
    public uhrzeit_end:time, 
    public impfort_id:Impfort){}
}