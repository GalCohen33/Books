import { ActionReducerMap } from "@ngrx/store";
import * as books from "../books/state/books.reducer" 

export interface AppState {
    books: books.booksState
  }
  
  export const appReducer: ActionReducerMap<AppState> = {
    books: books.booksReducer,
  };
   