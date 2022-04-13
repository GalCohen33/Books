import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Book} from "../models/book.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import  {MatStepper} from "@angular/material/stepper";
import * as booksActions from "../state/books.actions";
import {Store} from "@ngrx/store";
import * as AppStore from "../../app-state/app.reducer";
import {booksEditorState, booksState} from "../state/books.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editorState:string | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public book:Book,
    private store:Store<AppStore.AppState>) {
  }

  ngOnInit(): void {
    this.subscribeEditorState();
  }

  submit(f:NgForm, stepper:MatStepper){
    if(!f.valid) //todo
      return;

    stepper.next();
  }

  onDelete(stepper:MatStepper){
    let editorState :booksEditorState = {
      operation:"delete"
    }
    this.store.dispatch(booksActions.editorAction({editorState}));
    stepper.next();
  }

  confirm(){
    if(this.editorState == "add")
      this.store.dispatch(booksActions.addBook({book:this.book}));
    else if(this.editorState == "edit")
      this.store.dispatch(booksActions.updateBook({book:this.book}));
    else if (this.editorState == "delete")
      this.store.dispatch(booksActions.removeBook({bookId: this.book.id}));

     this.dialogRef.close();
  }

  subscribeEditorState(){
     this.store.select('books').subscribe(
      res=>{
        if(res){
          this.editorState = res.editorState.operation;
        }
      }
    );
  }

}
