import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { todosUIReducer } from './todo-ui.reducer';
import { todosReducer } from './todo.reducer';
import { TodoModuleState } from 'Modules/todo/states';

export const reducers: ActionReducerMap<TodoModuleState> = {
  todos: todosReducer,
  todosUI: todosUIReducer
};

export const metaReducers: MetaReducer<TodoModuleState>[] = [];
