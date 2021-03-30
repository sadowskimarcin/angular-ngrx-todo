import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from 'Modules/todo/states';
import * as TodoSelectors from '../../selectors';
import * as TodoActions from '../../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  public isLoading$ = this.store.pipe(select(TodoSelectors.selectTodoUiLoading));

  public todos$ = this.store.pipe(select(TodoSelectors.selectTodos));

  constructor(
    private store: Store<TodoState>,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(): void {
    this.store.dispatch({ type: TodoActions.loadTodos.type });
  }

  public nextPage(): void {
    this.store.dispatch({ type: TodoActions.loadNextPageTodos.type });
  }

}
