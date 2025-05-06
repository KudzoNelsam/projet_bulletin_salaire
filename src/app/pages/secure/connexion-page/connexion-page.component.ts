import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/services/impl/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  imports: [
    FormsModule,
  ],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.css'
})
export class ConnexionPageComponent {

  public error?: String;

  constructor(private http: HttpClient, private Auth: AuthService, private router: Router) {
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {

      this.Auth.getLogin(loginForm.value).subscribe(
        {
          next: (response) => {
            if (response.data) {
              this.router.navigateByUrl('/admin/employees')
                .then(r => console.log('navigate to dashboard'));
            } else {
              this.error = 'Login ou mot de passe incorrect';
            }
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
    }
  }


}
