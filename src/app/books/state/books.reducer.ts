import { createReducer, on, State } from '@ngrx/store';
import { Book } from '../models/book.model';
import { addBook, removeBook, updateBook } from './books.actions';

export interface booksState{
    books:Book[], 
    lastUpdate:Date; 
}

export const initialState: booksState ={
    books:[{id:"031264",title:"gone with the wind", publishingYear:"2010"}],
    lastUpdate: new Date()
}

export const booksReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => {
      return {
          ...state, 
          books:state.books.filter(x => x.id != bookId),
          lastUpdate:getCurrentTime()
      }
    }),
  on(addBook, (state, { book  }) => {
    if (state.books.some(x => x.id === book.id)) //book already exist
        return {...state};
    else
        return {
            ...state,
            books:[ ...state.books, book],
            lastUpdate:getCurrentTime()
        };
  }),
  on(updateBook, (state, { book }) => {
    if (!state.books.some(x => x.id === book.id)) //no such book found
        return {...state};
    else{
        let copyOfBooks = [...state.books] 
        copyOfBooks = copyOfBooks.map((value, index) => value.id === book.id ? {...book} : value) 
        return { 
            ...state,
            books:[ ...copyOfBooks],
            lastUpdate:getCurrentTime()
        }; 
    }
  })
);

function getCurrentTime(): Date{
    return new Date();
}

