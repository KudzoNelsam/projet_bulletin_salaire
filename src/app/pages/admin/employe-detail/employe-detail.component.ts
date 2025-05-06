import {Component, OnInit} from '@angular/core';
import {Employe} from '../../../shared/models/Employe';
import htmlToPdfmake from 'html-to-pdfmake';

// 📦 Requiert les modules CommonJS de pdfmake
import * as pdfMake from 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';
import {ActivatedRoute} from '@angular/router';
import {EmployeesService} from '../../../shared/services/impl/employees.service';
import {BulletinDePaie} from '../../../shared/models/BulletinDePaie';
import {BulletinService} from '../../../shared/services/impl/bulletin.service'; // S'assurer que 'vfs_fonts' est correctement importé

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})
export class EmployeDetailComponent implements OnInit {

  public employee?: Employe;
  public bulletinDePaie?: BulletinDePaie;

  constructor(private route: ActivatedRoute, private employeService: EmployeesService,
              private bulletinService: BulletinService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.employeService.getEmployee(+id).subscribe(employee => {
          this.employee = employee.data!;
        });
        this.bulletinService.getBulletinByEmployeeIdLocal(+id).subscribe({
          next: (bulletin) => {
            this.bulletinDePaie = bulletin.data!;
          },
        })
      }
    });
  }

  generatePDF() {
    const element = document.getElementById('bulletin');
    if (!element) return;

    const html = element.innerHTML;

    // Convertit le HTML en format compréhensible par pdfmake
    const pdfContent = htmlToPdfmake(html, {window: window as any});

    // Définir la structure du document
    const documentDefinition = {
      content: pdfContent,
      // pageOrientation doit être une chaîne de caractères strictement 'portrait' ou 'landscape'
      pageOrientation: 'portrait' as 'portrait', // Assurez-vous que c'est bien défini
      pageSize: 'A4' as 'A4', // Cela est également important pour éviter une autre erreur de type
    };

    // Ouvre le PDF généré dans un nouvel onglet
    pdfMake.createPdf(documentDefinition).open();
  }
}
