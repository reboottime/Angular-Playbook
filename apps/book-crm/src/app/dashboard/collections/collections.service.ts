import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { markBook, unmarkBook } from 'src/app/shared/state/marked-books.actions';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  constructor(private store: Store<AppState>) {}

  markBook(bookId: string) {
    this.store.dispatch(markBook({ bookId }));
  }

  unmarkBook(bookId: string) {
    this.store.dispatch(unmarkBook({ bookId }));
  }
}
