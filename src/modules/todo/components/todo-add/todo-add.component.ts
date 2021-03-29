import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from 'Modules/todo/states';
import * as TodoActions from 'Modules/todo/actions';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { filter, take } from 'rxjs/operators';
import * as TodoSelectors from 'Modules/todo/selectors';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent {
  public nameField = new FormControl('', [Validators.required]);

  constructor(
    private store: Store<TodoState>,
  ) { }

  public addTodo(): void {
    const name = this.nameField.value;
    this.nameField.setValue('', { emitEvent: false });
    this.store.pipe(
      select(TodoSelectors.selectAllTodos),
      take(1),
      filter(todos => this.isUniqueTodo(todos, name))
    ).subscribe(() => {
      this.store.dispatch(TodoActions.addTodo({ todo: new Todo(name) }));
    });
  }

  private isUniqueTodo(todos: Todo[], name: string): boolean {
    return (todos.find(todo => todo.name === name) === undefined);
  }
}
