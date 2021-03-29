import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';


// export const loadTodos = createAction('[Todo] Load Todos', props<{ todos: Todo[] }>());
export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
// export const setTodo = createAction('[Todo] Set Todo', props<{ todo: Todo }>());
// export const upsertTodo = createAction('[Todo] Upsert Todo', props<{ todo: Todo }>());
// export const addTodos = createAction('[Todo] Add Todos', props<{ todos: Todo[] }>());
// export const upsertTodos = createAction('[Todo] Upsert Todos', props<{ todos: Todo[] }>());
export const updateTodo = createAction('[Todo] Update Todo', props<{ update: Update<Todo> }>());
// export const updateTodos = createAction('[Todo] Update Todos', props<{ updates: Update<Todo>[] }>());

// export const mapTodo = createAction('[Todo] Map Todo', props<{ entityMap: EntityMapOne<Todo> }>());
// export const mapTodos = createAction('[Todo] Map Todos', props<{ entityMap: EntityMap<Todo> }>());
export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: Todo['id'] }>());
// export const deleteTodos = createAction('[Todo] Delete Todos', props<{ ids: string[] }>());
// export const deleteTodosByPredicate = createAction('[Todo] Delete Todos By Predicate', props<{ predicate: Predicate<Todo> }>());
// export const clearTodos = createAction('[Todo] Clear Todos');

export const loadTodos = createAction(
  '[Todo] Load Todos'
);
