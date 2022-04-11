import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksEditorPanel} from './books/books-editor-panel/books-editor-panel';
import * as appState from "./app-state/app.reducer"
import {FormsModule} from "@angular/forms";
import {BookDisplayComponent} from './books/book-display/book-display.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditBookComponent} from './books/edit-book/edit-book.component';
import {MatrerialModule} from "./matrerial/matrerial.module";

@NgModule({
  declarations: [
    AppComponent,
    BooksEditorPanel,
    BookDisplayComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appState.appReducer),
    FormsModule,
    BrowserAnimationsModule,
    MatrerialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
