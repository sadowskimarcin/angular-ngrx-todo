import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TODO_INDEX_FILTER } from './constans';
import { TodoState } from './states/todo.state';
import * as TodoSelectors from './selectors/todo.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  public filter!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<TodoState>,
  ) { }

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

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log(params[TODO_INDEX_FILTER]);
      this.filter = params[TODO_INDEX_FILTER];
    });
  }
}
