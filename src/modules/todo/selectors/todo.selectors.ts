import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { TODO_FEATURE_KEY } from 'Modules/todo/constans';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModuleState, todosAdapter } from 'Modules/todo/states';

export const getTodosModuleState = createFeatureSelector<TodoModuleState>(
  TODO_FEATURE_KEY
);
// interface State {
//   todos: TodoState;
// }

// export const reducers: ActionReducerMap<State> = {
//   todos: TodoReducers.reducer,
// };

export const getTodoState = createSelector(
  getTodosModuleState,
  state => state.todos
);
// export const selectTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

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

// export const selectLastTodos = (count: number) => {
//   return pipe(
//     select(selectAllTodos),
//     // takeLast(count)
//     last()
//   );
// };

// export const selectBookCollection = createSelector(
//   selectTodos,
//   selectCollectionState,
//   (todos: ReadonlyArray<Todo>, collection: ReadonlyArray<Todo['id']>) => {
//     return collection.map((id) => todos.find(todo => todo.id === id));
//   }
// );
