import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take, toArray } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

import { BooksService } from "./books.service";
import { CollectionsService } from "../collections/collections.service";
import { AddBookComponent } from "./add-book/add-book.component";
import { EditBookComponent } from './edit-book/edit-book.component';

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  constructor(
    private bookServices: BooksService,
    private store: Store<AppState>,
    private collectionService: CollectionsService,
    private dialog: MatDialog
  ) {}

  // Observables
  booksState$ = this.store.select('books').pipe(map(state => ({
    ...state,
    books: state.data ?? []
  })));

  markedBookIds$ = this.store.select('markedBooks');

  canAdd$: Observable<boolean> = this.store
    .select("auth")
    .pipe(map((state) => state.user?.permissions?.includes("canAdd") ?? false));
  canDelete$: Observable<boolean> = this.store
    .select("auth")
    .pipe(
      map((state) => state.user?.permissions?.includes("canDelete") ?? false),
    );
  canEdit$: Observable<boolean> = this.store
    .select("auth")
    .pipe(
      map((state) => state.user?.permissions?.includes("canEdit") ?? false),
    );
  canMark$: Observable<boolean> = this.store
    .select("auth")
    .pipe(
      map((state) => state.user?.permissions?.includes("canMark") ?? false),
    );

  ngOnInit(): void {
    this.bookServices.fetchBooks();
  }

  openAddBookDialog() {
    this.dialog.open(AddBookComponent, {
      width: '620px',
    })
  }

  openEditBookDialog(book: Book) {
    this.dialog.open(EditBookComponent, {
      width: '620px',
      data: book
    })
  }

  toggleMarkBook(book: Book) {
    // use the take(1) operator to ensure that you only receive the first emitted value from markedBookIds$ and then unsubscribe. 
    this.markedBookIds$.pipe(take(1)).subscribe({
      next: (bookIds) => {
        if (bookIds.includes(book.id)) {
          this.collectionService.unmarkBook(book.id);
        } else {
          this.collectionService.markBook(book.id);
        }
      }
    })
  }
}
