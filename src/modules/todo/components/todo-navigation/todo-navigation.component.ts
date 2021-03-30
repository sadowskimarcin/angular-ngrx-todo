import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as TodoSelectors from 'Modules/todo/selectors/todo.selectors';
import { TodoState } from 'Modules/todo/states';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-navigation',
  templateUrl: './todo-navigation.component.html',
  styleUrls: ['./todo-navigation.component.sass']
})
export class TodoNavigationComponent implements OnInit {
  public allTodosCount$ = this.store.pipe(
    select(TodoSelectors.selectAllTodos),
    map(todos => todos.length)
  );
  public completedTodosCount$ = this.store.pipe(
    TodoSelectors.completedTodos,
    map(todos => todos.length)
  );
  public activeTodosCount$ = this.store.pipe(
    TodoSelectors.activeTodos,
    map(todos => todos.length)
  );

  constructor(
    private store: Store<TodoState>,
  ) { }

  ngOnInit(): void {
  }

}
