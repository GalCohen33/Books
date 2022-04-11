import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditRepositoryComponent } from './books/edit-repository/edit-repository.component';
import * as appState from "./app-state/app.reducer"
import {FormsModule} from "@angular/forms";

@NgModule({  declarations: [
    AppComponent,
    EditRepositoryComponent
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
