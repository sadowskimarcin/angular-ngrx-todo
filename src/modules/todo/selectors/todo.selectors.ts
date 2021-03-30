import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { TODO_FEATURE_KEY } from 'Modules/todo/constans';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModuleState, todosAdapter } from 'Modules/todo/states';
import { selectRouteParams } from 'App/router.selectors';

export const getTodosModuleState = createFeatureSelector<TodoModuleState>(
  TODO_FEATURE_KEY
);

export const getTodoState = createSelector(
  getTodosModuleState,
  state => state.todos
);

const {
  selectAll: getAllTodos,
  // selectTotal: getCountAllTodos,
  // selectEntities: getEntitiesTodos
} = todosAdapter.getSelectors(getTodoState);

export const selectAllTodos = createSelector(
  getTodoState,
  todosAdapter.getSelectors().selectAll
);

export const completedTodos = pipe(
  select(getAllTodos),
  map(todos => todos.filter(todo => todo.isCompleted))
);

export const activeTodos = pipe(
  select(getAllTodos),
  map(todos => todos.filter(todo => !todo.isCompleted))
);

export const selectTodos = createSelector(
  selectAllTodos,
  selectRouteParams,
  (todos, { filter }) => {
      switch (filter) {
        case 'all':
          return todos;
        case 'active':
          return todos.filter(todo => !todo.isCompleted);
        case 'completed':
          return todos.filter(todo => todo.isCompleted);
      }
      throw new Error(`Filter ${filter} should never exists!`);
  }
);
