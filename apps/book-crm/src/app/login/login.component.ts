import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../shared/state/auth.actions';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private store: Store, readonly authService: AuthService, readonly router: Router) { }

  onSubmit() {
    if (this.email && this.password) {
      const user = this.authService.authUser(this.email, this.password);

      if (user) {
        this.store.dispatch(login(user));
        this.router.navigate(['/']);
      } else {
        this.store.dispatch(logout());
      }
    }
  }
}
