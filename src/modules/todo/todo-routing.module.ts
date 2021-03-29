import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TODO_INDEX_FILTER } from './constans';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'all',
  },
  { path: `:${TODO_INDEX_FILTER}`, component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
