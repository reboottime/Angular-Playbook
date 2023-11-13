import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit{
  isLoggedIn = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select('auth').subscribe((authState) => {
      this.isLoggedIn = authState.isLoggedIn;
    });
  }

  ngAfterContentInit(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
