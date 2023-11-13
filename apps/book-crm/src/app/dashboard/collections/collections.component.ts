import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CollectionsService } from './collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  constructor(private store: Store<AppState>, private collectionService: CollectionsService) { }

  books: Book[] = [];

  ngOnInit(): void {
    this.store.subscribe({
      next: (state) => {
        const { books, markedBooks } = state;

        this.books = books.data?.filter(book => markedBooks.includes(book.id)) ?? []
      }
    })
  }

  unmarkBook(book: Book) {
    this.collectionService.unmarkBook(book.id);
  }
}
