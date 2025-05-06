export interface LigneBulletin {
  numero: number;
  designation: string;
  nombre: number;
  base: number;
  tauxSalarial?: number;
  gain?: number;
  retenueSalariale?: number;
  tauxPatronal?: number;
  retenuePatronale?: number;
  type: TypeLigneBulletin;
}

export enum TypeLigneBulletin {
  Prime = 0,
  Cotisation = 1,
  Retenue = 2
}
