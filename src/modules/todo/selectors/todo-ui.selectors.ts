import { createSelector } from '@ngrx/store';
import { getTodosModuleState } from 'Modules/todo/selectors/todo.selectors';

export const getTodoUiState = createSelector(
  getTodosModuleState,
  state => state.todosUI
);

export const selectTodoUiLoading = createSelector(
  getTodoUiState,
  ui => ui.loadingTodos
);
