import { createReducer, on, Action } from '@ngrx/store';
import { markBook, unmarkBook } from './marked-books.actions';

export const initialState = [] as string[];

const _markedBooksReducer = createReducer(
  initialState,
  on(markBook, (state, { bookId }) => [...state, bookId]),
  on(unmarkBook, (state, { bookId }) => state.filter(id => id !== bookId))
);

export function markedBooksReducer(state: string[] | undefined, action: Action) {
  return _markedBooksReducer(state, action);
}
