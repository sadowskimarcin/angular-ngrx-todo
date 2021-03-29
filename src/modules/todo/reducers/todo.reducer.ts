import { createReducer, on } from '@ngrx/store';
import * as TodoActions from 'Modules/todo/actions';
import { todosAdapter, TodoState } from 'Modules/todo/states';

const initialState: TodoState = todosAdapter.getInitialState({
  // additional entity state properties
});

export const todosReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => todosAdapter.addOne(todo, state)),
  on(TodoActions.deleteTodo, (state, { id }) => todosAdapter.removeOne(id, state)),
  on(TodoActions.updateTodo, (state, { update }) => todosAdapter.updateOne(update, state)),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => todosAdapter.setAll(todos, state)),
  on(TodoActions.loadNextPageTodosSuccess, (state, { todos }) => todosAdapter.addMany(todos, state)),
);
