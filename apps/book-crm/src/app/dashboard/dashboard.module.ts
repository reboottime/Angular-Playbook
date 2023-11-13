import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BooksModule } from './books/books.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CollectionsModule } from './collections/collections.module';

@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProfileComponent,
  ],
  imports: [
    DashboardRoutingModule,
    BooksModule,
    CollectionsModule,
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
