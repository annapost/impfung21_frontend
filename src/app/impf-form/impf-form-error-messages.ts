export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const ImpfFormErrorMessages = [
  new ErrorMessage("datum", "required", "Ein Datum muss angegeben werden"),
  
  new ErrorMessage(
    "uhrzeit_start", 
    "required", 
    "Es muss eine Startuhrzeit angegeben werden"
    ),
  new ErrorMessage(
    "uhrzeit_end", 
    "required", 
    "Es muss eine Enduhrzeit angegeben werden"
  ),
  new ErrorMessage(
    "plz",
    "required",
    "Es muss eine PLZ angegeben werden"
  ),
  new ErrorMessage(
    "ort", 
    "required", 
    "Es muss ein Ort angegeben werden"
  ),
  new ErrorMessage(
    "strasse",
    "required",
    "Es muss eine Strasse mit Nummer angegeben werden"
  ),
    new ErrorMessage(
    "bezeichnung",
    "required",
    "Es muss eine genauere Ortsbezeichnung angegeben werden (zB. Gemeindeamt)"
  ),
    new ErrorMessage(
    "max_personen", 
    "required", 
    "Es muss eine maximale Personenanzahl eingegeben werden!"),

  new ErrorMessage(
    "max_personen", 
    "min", 
    "Die maximale Personenzahl, darf nicht geringer sein als bereits Personen angemeldet sind!"),

];
