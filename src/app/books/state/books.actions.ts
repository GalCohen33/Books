import { createAction, props, Action } from '@ngrx/store';
import { Book } from '../models/book.model'
import {booksEditorState} from "./books.reducer";

export const addBook = createAction(
  '[Book] Add Book',
  props<{ book: Book }>()
);

export const removeBook = createAction(
  '[Book] Remove Book',
  props<{ bookId: string }>()
);

export const updateBook = createAction(
  '[Book] Update Book',
  props<{ book:Book}>()
);

export const editorAction = createAction(
  '[Book] Editor action',
  props<{ editorState:booksEditorState}>()
);

// export const ADD_BOOK = 'ADD_BOOK';
// export const REMOVE_BOOK = 'REMOVE_BOOK';
// export const UPDATE_BOOK = 'UPDATE_BOOK';


// export class addBook implements Action{
//   readonly type = ADD_BOOK;
//   constructor(public payload:Book){}
// }

// export class removeBook implements Action{
//   readonly type = REMOVE_BOOK;
//   constructor(public payload:string){}
// }

// export class updateBook implements Action{
//   readonly type = UPDATE_BOOK;
//   constructor(public payload:Book){}
// }


// export type ShoppingListActions =
//   | addBook
//   | removeBook
//   | updateBook



