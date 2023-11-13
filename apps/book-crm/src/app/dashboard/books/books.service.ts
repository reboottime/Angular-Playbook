import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  loadBooks,
  loadBooksFailure,
  loadBooksSuccess,
} from "src/app/shared/state/books.actions";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  private API_PATH: string;

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>,
  ) {
    this.API_PATH = `${environment.apiUrl}/books`;
  }

  fetchBooks() {
    this.store.dispatch(loadBooks());

    this.httpClient.get<Book[]>(this.API_PATH).subscribe({
      next: (books) => {
        this.store.dispatch(loadBooksSuccess({ books }));
      },
      error: (error) => this.store.dispatch(loadBooksFailure({ error })),
    });
  }

  addBook (bookData: Book) {
    return this.httpClient.post<Book>(this.API_PATH, bookData);
  }

  editBook (book: Book) {
    const bookURL = `${this.API_PATH}/${book.id}`;
    return this.httpClient.patch<Book>(bookURL, book).subscribe({
      next: (_data) => this.fetchBooks(),
      error: (error) => console.warn(error),
    })
  }
}
