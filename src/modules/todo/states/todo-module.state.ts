import { TodoState } from './todo.state';
import { TodoUIState } from './todo-ui.state';

export interface TodoModuleState {
  todos: TodoState;
  todosUI: TodoUIState;
}
