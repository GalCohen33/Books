import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {MatDialog} from "@angular/material/dialog";
import {EditBookComponent} from "../edit-book/edit-book.component";
import * as booksActions from "../state/books.actions";
import {Store} from "@ngrx/store";
import * as AppStore from "../../app-state/app.reducer";
import {booksEditorState} from "../state/books.reducer";

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  @Input() book$:Book | undefined;

  constructor(private dialog: MatDialog,private store:Store<AppStore.AppState>) { }

  ngOnInit(): void {
  }

  onEdit(){
    let editorState :booksEditorState = {
      operation:"edit"
    }
    this.store.dispatch(booksActions.editorAction({editorState}));


    let dialogRef = this.dialog.open(EditBookComponent, {
      // height: '400px',
      // width: '600px',
      data: {...this.book$}
    });

    dialogRef.afterClosed().subscribe(result => {
      let editorState :booksEditorState = {
        operation:"view"
      }
      this.store.dispatch(booksActions.editorAction({editorState}));

      // if(result){
      //   this.store.dispatch(booksActions.updateBook({book:result}));
      // }

    });
  }

}
