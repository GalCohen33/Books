import { createReducer, on, State } from '@ngrx/store';
import { Book } from '../models/book.model';
import {addBook, editorAction, removeBook, updateBook} from './books.actions';


export interface booksEditorState{
  operation: "edit" | "delete" | "add" | "view";
  bookId?: string | undefined
}

export interface booksState{
    books:Book[],
    lastUpdate:Date;
    editorState:booksEditorState;

}

export const initialState: booksState ={
    books:[{id:"031264",title:"gone with the wind", publishingYear:"2010"}],
    lastUpdate: new Date(),
    editorState: {operation:"view", bookId:undefined}
}

export const booksReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => {
      return {
          ...state,
          books:state.books.filter(x => x.id != bookId),
          lastUpdate:getCurrentTime(),
      }
    }),
  on(addBook, (state, { book  }) => {
    if (state.books.some(x => x.id === book.id)) //book already exist
        return {...state};
    else
        return {
            ...state,
            books:[ ...state.books, book],
            lastUpdate:getCurrentTime(),
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
            lastUpdate:getCurrentTime(),
        };
    }
  }),
  on(editorAction,(state, {editorState}) =>{
    return {
      ...state,
      editorState: {...editorState}
    };
  })
);

function getCurrentTime(): Date{
    return new Date();
}
 function getEditorInitialState():booksEditorState{
    return {operation:"view", bookId:undefined}
}

