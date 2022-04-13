import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppStore from 'src/app/app-state/app.reducer';
import { Book } from '../models/book.model';
import * as booksActions from '../state/books.actions';
import {booksEditorState, booksState} from '../state/books.reducer';
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


  addBook(){
    let editorState :booksEditorState = {
      operation:"add"
    }
    this.store.dispatch(booksActions.editorAction({editorState}));

    let dialogRef = this.dialog.open(EditBookComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      let editorState :booksEditorState = {
        operation:"view"
      }
      this.store.dispatch(booksActions.editorAction({editorState}));

    });
  }


  indexTracker(index: number) {
    return index;
  }

}
