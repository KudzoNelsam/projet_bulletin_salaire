// services/bulletin.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {BulletinDePaie} from '../../models/BulletinDePaie';
import {ResponseModel} from '../../models/response.model';
import {BULLETINS_MOCK} from '../../mock/bulletin.mock';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  constructor(private http: HttpClient) {
  }

  getBulletinByEmployeeIdLocal(employeeId: number): Observable<ResponseModel<BulletinDePaie | null>> {
    const bulletin: BulletinDePaie = BULLETINS_MOCK.find(b => b.employeId === employeeId)!;
    if (!bulletin) {
      return of({
        status: 404,
        data: null,
      })
    }
    return of(
      {
        data: bulletin,
        status: 200,
      }
    )
  }

  getBulletinByEmployeId(employeId: number): Observable<BulletinDePaie> {
    return this.http.get<BulletinDePaie>(`/api/employes/${employeId}/bulletin`);
  }
}
