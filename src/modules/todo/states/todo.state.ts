import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from '../models/todo.model';

export interface TodoState extends EntityState<Todo> { }

export const todosAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: todo => todo.id,
  sortComparer: (a, b) => (a.id > b.id) ? 1 : 0
  // sortComparer: (a, b) => a.name.localeCompare(b.name)
});
