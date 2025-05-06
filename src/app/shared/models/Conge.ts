export interface Conges {
  acquis: number;
  resteAPrendre: number;
  pris: number;
  periodes: { debut: Date; fin: Date }[]; // Tableau de périodes
  commentaire: string;
}
