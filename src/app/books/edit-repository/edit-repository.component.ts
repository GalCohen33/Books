import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppStore from 'src/app/app-state/app.reducer';
import { Book } from '../models/book.model';
import * as booksActions from '../state/books.actions';
import { booksState } from '../state/books.reducer';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-repository',
  templateUrl: './edit-repository.component.html',
  styleUrls: ['./edit-repository.component.css']
})
export class EditRepositoryComponent implements OnInit {
  //books$:Observable<booksState> | undefined
  bookModel: booksState | undefined;
  constructor(private store:Store<AppStore.AppState>) { }

  ngOnInit(): void {
    this.store.select('books').subscribe(
      res=>{
        if(res)
          this.bookModel = res;
      }
    );
  }

  addBook(){
    let book:Book = {
      id:"144141",
      publishingYear:"2016",
      title:"dawdawd"
    };

    this.store.dispatch(booksActions.addBook({book}))
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


  submit(f:NgForm){
    if(!f.valid)
      return;

    //state change -> update

  }

}
