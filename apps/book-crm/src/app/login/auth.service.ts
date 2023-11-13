import { Injectable } from '@angular/core';
import DEFAULT_USERS  from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser(email: string, password: string): Omit<User, 'password'> | null {
    const existingUser = DEFAULT_USERS.find(user => user.email === email);

    if (existingUser && existingUser.password === password) {
      const { password: _password, ...userData } = existingUser;

      return userData;
    }

    return null;
  }

  checkUserAuth(): User | null {
    try {
      return JSON.parse(localStorage.getItem('user') ?? '');
    } catch (e) {
      return null;
    }
  }
}
