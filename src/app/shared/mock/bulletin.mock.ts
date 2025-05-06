import {BulletinDePaie} from '../models/BulletinDePaie';
import {TypeLigneBulletin} from '../models/LigneBulletin';

export const BULLETINS_MOCK: BulletinDePaie[] = [
  {
    id: 1,
    employeId: 1,
    periodeDebut: '2025-04-01',
    periodeFin: '2025-04-30',
    datePaiement: '2025-05-05',
    moyenPaiement: 'Virement bancaire',
    commentaires: 'Aucun commentaire particulier',
    lignes: [
      {
        designation: 'Salaire de base',
        nombre: 1,
        base: 300000,
        tauxSalarial: 0,
        gain: 300000,
        tauxPatronal: 0,
        retenuePatronale: 0,
        type: TypeLigneBulletin.Prime,
        numero: 0
      },
      {
        designation: 'Prime de transport',
        nombre: 1,
        base: 20000,
        tauxSalarial: 0,
        gain: 20000,
        tauxPatronal: 0,
        retenuePatronale: 0,
        type: TypeLigneBulletin.Prime,
        numero: 0
      },
      {
        designation: 'IPRES',
        nombre: 1,
        base: 320000,
        tauxSalarial: 5.6,
        gain: 0,
        tauxPatronal: 8.4,
        retenuePatronale: 26880,
        type: TypeLigneBulletin.Cotisation,
        numero: 0
      },
      {
        designation: 'CSS (Maladie)',
        nombre: 1,
        base: 320000,
        tauxSalarial: 4.0,
        gain: 0,
        tauxPatronal: 6.0,
        retenuePatronale: 19200,
        type: TypeLigneBulletin.Cotisation,
        numero: 0
      }
    ]
  },
  {
    id: 2,
    employeId: 2,
    periodeDebut: '2025-04-01',
    periodeFin: '2025-04-30',
    datePaiement: '2025-05-05',
    moyenPaiement: 'Espèces',
    commentaires: '',
    lignes: [
      {
        designation: 'Salaire de base',
        nombre: 1,
        base: 400000,
        tauxSalarial: 0,
        gain: 400000,
        tauxPatronal: 0,
        retenuePatronale: 0,
        type: TypeLigneBulletin.Prime,
        numero: 0
      },
      {
        designation: 'Prime de panier',
        nombre: 1,
        base: 25000,
        tauxSalarial: 0,
        gain: 30000,
        tauxPatronal: 0,
        retenuePatronale: 0,
        type: TypeLigneBulletin.Prime,
        numero: 0

      },
      {
        designation: 'IPRES',
        nombre: 1,
        base: 425000,
        tauxSalarial: 5.6,
        gain: 0,
        tauxPatronal: 8.4,
        retenuePatronale: 35700,
        type: TypeLigneBulletin.Retenue,
        numero: 0

      }
    ]
  }
];
