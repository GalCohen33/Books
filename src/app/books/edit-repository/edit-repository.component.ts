import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppStore from 'src/app/app-state/app.reducer';
import { Book } from '../models/book.model';
import * as booksActions from '../state/books.actions';
import { booksState } from '../state/books.reducer';

@Component({
  selector: 'app-edit-repository',
  templateUrl: './edit-repository.component.html',
  styleUrls: ['./edit-repository.component.css']
})
export class EditRepositoryComponent implements OnInit {
  books$:Observable<booksState> | undefined 
  constructor(private store:Store<AppStore.AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }

  addBook(){
    let book:Book = {
      id:"123123", 
      publishingYear:"2012",
      title:"cats"
    }; 

    this.store.dispatch(booksActions.addBook({book}));
  }

  deleteBook(){
    this.store.dispatch(booksActions.removeBook({bookId:"123123"}));
  }

  updateBook(){
    let book:Book = {
      id:"123123", 
      publishingYear:"2018",
      title:"catss"
    }; 
    this.store.dispatch(booksActions.updateBook({book}));
  }



}
