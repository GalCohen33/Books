import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksEditorPanel } from './books/books-editor-panel/books-editor-panel';

const routes: Routes = [
  { path: 'edit', component: BooksEditorPanel },
  { path: '', redirectTo: 'edit' ,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
