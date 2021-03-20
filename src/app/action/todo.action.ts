import { Action } from '@ngrx/store';
import { Todo } from '../model/todo.model';


export const ADD_TODO = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) { }
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: Todo['id']) { }
}

export type Actions =
  | AddTodo
  | RemoveTodo
  ;
