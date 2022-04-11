import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksEditorPanel } from './books/books-editor-panel/books-editor-panel';
import * as appState from "./app-state/app.reducer"
import {FormsModule} from "@angular/forms";
import { BookEditComponent } from './books/book-edit/book-edit.component';

@NgModule({  declarations: [
    AppComponent,
    BooksEditorPanel,
    BookEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(appState.appReducer),
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
