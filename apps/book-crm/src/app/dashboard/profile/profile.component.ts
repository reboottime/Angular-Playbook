import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  userData: Omit<User, 'password'> = {
    email: '',
    userName: '',
    permissions: [],
    roles: []
  };

  ngOnInit(): void {
    this.store.select('auth').subscribe({
      next: ({ user }) => {
        if (user) {
          this.userData = user;
        }
      }
    })
  }
}
