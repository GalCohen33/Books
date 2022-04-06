import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRepositoryComponent } from './books/edit-repository/edit-repository.component';

const routes: Routes = [
  { path: 'edit', component: EditRepositoryComponent },
  { path: '', redirectTo: 'edit' ,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }