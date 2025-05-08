import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ResponseModel} from '../../models/response.model';
import {Employe} from '../../models/Employe';
import {EMPLOYES_MOCK} from '../../mock/employe.mock';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() {
  }

  getEmployee(id: number): Observable<ResponseModel<Employe | null>> {
    const employee = EMPLOYES_MOCK.find(e => e.id === id);
    if (!employee) {
      return of({
        status: 404,
        data: null,
      })
    }
    
    return of({
      status: 200,
      data: employee,
    })
  }

  getEmployees(): Observable<ResponseModel<Employe | null>> {
    return of({
      status: 200,
      data: null,
    })
  }
}
