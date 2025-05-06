import {Injectable, signal} from '@angular/core';
import {AuthInterface} from '../auth.interface';
import {Observable, of} from 'rxjs';
import {Role, User, UserLogin} from '../../models/user.model';
import {USER_MOCK} from '../../mock/user.mock';
import {ResponseModel} from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthInterface {
  currentUserSignal = signal<User>({
    name: "",
    login: "",
    role: Role.ADMIN,
    password: "",
    id: 0
  })

  constructor() {
  }

  getLogin(userLogin: UserLogin): Observable<ResponseModel<User | null>> {

    const userConnect = USER_MOCK.find(
      (user: User) =>
        user.login.trim() === userLogin.login.trim() && user.password.trim() === userLogin.password.trim()
    );

    if (userConnect) {
      localStorage.setItem('token', 'token');
      this.currentUserSignal.set(userConnect);
      const fakeToken = btoa(JSON.stringify(userLogin));
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('user', JSON.stringify(userConnect));
      return of(
        {
          data: userConnect,
          status: 200,
        }
      )
    }

    return of(
      {
        data: null,
        status: 204
      }
    )
  }

  isAuthenticated(): boolean {
    // Vérifie si nous sommes dans un environnement de navigateur
    if (typeof window !== 'undefined' && window.localStorage) {
      // Code pour utiliser localStorage dans le navigateur
      const token = localStorage.getItem('token');
      return !!token;
    }
    return false;
  }


}
