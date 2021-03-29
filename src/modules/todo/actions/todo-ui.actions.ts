import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadNextPageTodos = createAction(
  '[Todo] Load Next Page Todos'
);

export const loadNextPageTodosSuccess = createAction(
  '[Todo] Load Next Page Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFail = createAction(
  '[Todo] Load Todos Fail',
  props<{ error: string }>()
);
