import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from 'Modules/todo/models/todo.model';
import { TodoState } from 'Modules/todo/states';
import * as TodoActions from 'Modules/todo/actions';

@Component({
  selector: 'app-todo-record',
  templateUrl: './todo-record.component.html',
  styleUrls: ['./todo-record.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoRecordComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public _todo!: Todo;
  public checkField = new FormControl();
  public textField = new FormControl();

  @Input()
  set todo(todo: Todo) {
    this._todo = todo;
    this.textField.setValue(this._todo.name);
    this.checkField.setValue(this._todo.isCompleted, { emitEvent: false });
  }

  constructor(
    private store: Store<TodoState>
  ) {
    this.checkField.valueChanges.subscribe(isChecked => this.todoOnCheck(isChecked));
  }

  private todoOnCheck(isChecked: boolean): void {
    this.store.dispatch(TodoActions.updateTodo({
      update: {
        id: this._todo.id,
        changes: {
          isCompleted: isChecked
        }
      }
    }));
  }

  ngOnInit(): void {
  }

  public activeEditMode(): void {
    console.log('activeEditMode');
  }

  public deleteTodo(): void {
    this.store.dispatch(TodoActions.deleteTodo({ id: this._todo.id }));
  }
}
