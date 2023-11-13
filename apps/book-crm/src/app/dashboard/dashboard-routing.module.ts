import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionsComponent } from './collections/collections.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'books',
      component: BooksComponent
    }, {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'my-favorites',
      component: CollectionsComponent
    }]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
