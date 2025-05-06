import {Observable} from 'rxjs';
import {User, UserLogin} from '../models/user.model';
import {ResponseModel} from '../models/response.model';

export interface AuthInterface {
  getLogin(userLogin: UserLogin): Observable<ResponseModel<User | null>>
}
