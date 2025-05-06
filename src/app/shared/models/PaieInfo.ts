export interface PaieInfo {
  periodeDebut: Date;
  periodeFin: Date;
  paiementDate: Date;
  paiementMode: PaiementMode;
}

export enum PaiementMode {
  VIREMENT_BANCAIRE = "Virement Bancaire",
  CHEQUE = "Cheque",
  ELECTRONIQUE = "Electronique"

}
