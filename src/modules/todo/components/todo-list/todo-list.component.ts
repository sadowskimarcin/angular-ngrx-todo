import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from 'Modules/todo/states';
import * as TodoSelectors from '../../selectors';
import * as TodoActions from '../../actions';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { assertUnreachable } from 'src/app/helpers/assert-unreachable';

enum TodoListViews {
  All = 'all',
  Completed = 'completed',
  Active = 'active'
}

const isTodoListView = (view: string): view is TodoListViews => {
  return (Object.values(TodoListViews).includes(view as TodoListViews));
};

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  private currentView: TodoListViews = TodoListViews.All;
  public isLoading$ = this.store.pipe(select(TodoSelectors.selectTodoUiLoading));

  @Input()
  set filter(filter: string) {
    if (filter === undefined) {
      return;
    }

    if (isTodoListView(filter)) {
      this.currentView = filter;
      return;
    }

    throw new Error(`Filter (${filter}) is not TodoListViews`);
  }

  public get todos$(): Observable<Todo[]> {
    switch (this.currentView) {
      case TodoListViews.All:
        return this.store.pipe(select(TodoSelectors.selectAllTodos));
      case TodoListViews.Active:
        return this.store.pipe(TodoSelectors.activeTodos);
      case TodoListViews.Completed:
        return this.store.pipe(TodoSelectors.completedTodos);
    }

    assertUnreachable(this.currentView);
  }

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
