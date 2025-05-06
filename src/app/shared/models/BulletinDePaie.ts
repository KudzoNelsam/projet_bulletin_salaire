import {LigneBulletin} from './LigneBulletin';

export interface BulletinDePaie {
  id: number;
  employeId: number;
  periodeDebut: string;
  periodeFin: string;
  datePaiement: string;
  moyenPaiement: string;
  commentaires?: string;
  lignes: LigneBulletin[];
}
