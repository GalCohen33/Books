import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppStore from 'src/app/app-state/app.reducer';
import { Book } from '../models/book.model';
import * as booksActions from '../state/books.actions';
import { booksState } from '../state/books.reducer';
import {MatDialog} from "@angular/material/dialog";
import {EditBookComponent} from "../edit-book/edit-book.component";

@Component({
  selector: 'app-books-editor-panel',
  templateUrl: './books-editor-panel.html',
  styleUrls: ['./books-editor-panel.css']
})
export class BooksEditorPanel implements OnInit {
  books$:Observable<booksState> | undefined
  bookModel: booksState | undefined;
  constructor(private store:Store<AppStore.AppState>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }
  //
  // addBook(){
  //   let book:Book = {
  //     id:"132132",
  //     publishingYear:"",
  //     title:""
  //   };
  //
  //   this.store.dispatch(booksActions.addBook({book}))
  // }

  addBook(){

      let book:Book = {
        id:"132132",
        publishingYear:"",
        title:""
      };

    let dialogRef = this.dialog.open(EditBookComponent, {
      height: '400px',
      width: '600px',
      data: {book}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.store.dispatch(booksActions.updateBook({book:result}));
    });
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



  indexTracker(index: number) {
    return index;
  }

}
