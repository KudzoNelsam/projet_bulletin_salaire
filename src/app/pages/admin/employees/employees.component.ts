import {Component, OnInit} from '@angular/core';
import {Employe} from '../../../shared/models/Employe';
import {EMPLOYES_MOCK} from '../../../shared/mock/employe.mock';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  public employees: Employe[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.employees = EMPLOYES_MOCK;
  }

  detail(id: number) {
  }

  edit(id: number) {
  }

  async goToDetail(id: number) {
    this.router.navigateByUrl('', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/admin/detail/${id}`]); // Exemple d’URL
    });
  }
}
