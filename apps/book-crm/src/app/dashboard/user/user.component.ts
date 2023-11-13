import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/login/auth.service';
import { logout } from 'src/app/shared/state/auth.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  username = '';

  constructor(private store: Store<AppState>, readonly router: Router) {
    store.select('auth').subscribe(authState => {
      this.username = authState.user?.userName ?? '';
    })
  }

  signOut () {
    this.store.dispatch(logout());
    this.router.navigate(['login']);
  }
}
