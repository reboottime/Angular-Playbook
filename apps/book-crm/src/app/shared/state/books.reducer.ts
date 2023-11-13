import { createReducer, on, Action } from "@ngrx/store";
import * as BooksActions from "./books.actions";

type BooksState = AppState["books"];

export const initialState: AppState["books"] = {
  data: [],
  loading: false,
  error: null,
};

const _booksReducer = createReducer(
  initialState,

  on(BooksActions.loadBooks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(BooksActions.loadBooksSuccess, (state: BooksState, { books }) => ({
    ...state,
    data: books,
    loading: false,
    error: null,
  })),

  on(BooksActions.loadBooksFailure, (state: BooksState, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);

export function booksReducer(state: BooksState | undefined, action: Action) {
  return _booksReducer(state, action);
}
