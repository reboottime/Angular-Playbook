import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { CollectionsComponent } from './collections.component';

@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class CollectionsModule { }
