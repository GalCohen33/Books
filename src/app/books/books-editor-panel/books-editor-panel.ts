import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppStore from 'src/app/app-state/app.reducer';
import { Book } from '../models/book.model';
import * as booksActions from '../state/books.actions';
import { booksState } from '../state/books.reducer';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-books-editor-panel',
  templateUrl: './books-editor-panel.html',
  styleUrls: ['./books-editor-panel.css']
})
export class BooksEditorPanel implements OnInit {
  books$:Observable<booksState> | undefined
  bookModel: booksState | undefined;
  constructor(private store:Store<AppStore.AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }

  addBook(){
    let book:Book = {
      id:"132132",
      publishingYear:"",
      title:""
    };

    this.store.dispatch(booksActions.addBook({book}))
  }

  deleteBook(){
     this.store.dispatch(booksActions.removeBook({bookId:"132132"}));
  }

  updateBook(){
    let book:Book = {
      id:"132132",
      publishingYear:"2018",
      title:"catss"
    };
    this.store.dispatch(booksActions.updateBook({book}));
  }



  indexTracker(index: number, value: any) {
    return index;
  }

}
