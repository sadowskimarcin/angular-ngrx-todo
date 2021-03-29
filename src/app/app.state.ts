import { Todo } from 'Modules/todo/models/todo.model';

export interface AppState {
  todos: ReadonlyArray<Todo>;
}
