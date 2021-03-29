import { createReducer, on } from '@ngrx/store';
import * as TodoUIActions from '../actions/todo-ui.actions';
import * as TodoActions from '../actions/todo.actions';
import { TodoUIState } from '../states';

const initialState: TodoUIState = {
  loadingTodos: false,
  errorLoadingTodos: null,
};

export const todosUIReducer = createReducer(
  initialState,
  on(TodoUIActions.loadNextPageTodos, (state) => {
    return {
      ...state,
      loadingTodos: true,
      errorLoadingTodos: null
    };
  }),
  on(TodoActions.loadTodos, (state) => {
    return {
      ...state,
      loadingTodos: true,
      errorLoadingTodos: null
    };
  }),
  on(TodoUIActions.loadTodosSuccess, (state) => {
    return {
      ...state,
      loadingTodos: false,
      errorLoadingTodos: null
    };
  }),
  on(TodoUIActions.loadNextPageTodosSuccess, (state) => {
    return {
      ...state,
      loadingTodos: false,
      errorLoadingTodos: null
    };
  }),
  on(TodoUIActions.loadTodosFail, (state, {error}) => {
    return {
      ...state,
      loadingTodos: false,
      errorLoadingTodos: error || null
    };
  }),
);
