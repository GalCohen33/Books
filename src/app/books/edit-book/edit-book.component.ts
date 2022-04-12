import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Book} from "../models/book.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import * as booksActions from "../state/books.actions";
import {Store} from "@ngrx/store";
import * as AppStore from "../../app-state/app.reducer";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  //book:Book | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public book:Book,
    private store:Store<AppStore.AppState>) {
  }

  ngOnInit(): void {
  }

  submit(f:NgForm){
    if(!f.valid)
      return;

    this.dialogRef.close(this.book)
    //state change -> update

  }


  onDelete(){
    this.store.dispatch(booksActions.removeBook({bookId: this.book.id}));
  }


  closeDialog() {

  }

}
