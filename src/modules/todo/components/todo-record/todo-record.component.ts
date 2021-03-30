import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from 'Modules/todo/models/todo.model';
import { TodoState } from 'Modules/todo/states';
import * as TodoActions from 'Modules/todo/actions';
import { of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-record',
  templateUrl: './todo-record.component.html',
  styleUrls: ['./todo-record.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoRecordComponent implements OnInit {
  public _todo!: Todo;
  public checkField = new FormControl();
  public textField = new FormControl();
  public isEditModeActivated: boolean = false;
  public textUpdated$ = new Subject();

  @ViewChild('textInput', { static: true }) textInput!: ElementRef;
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
    this.textUpdated$.pipe(
      switchMap(() => of(this.textField.value)),
      tap(() => this.isEditModeActivated = false),
    ).subscribe(text => this.changeTodoName(text));
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

  private changeTodoName(text: string): void {
    this.store.dispatch(TodoActions.updateTodo({
      update: {
        id: this._todo.id,
        changes: {
          name: text
        }
      }
    }));
  }

  ngOnInit(): void {
  }

  public activeEditMode(): void {
    this.isEditModeActivated = true;
    setTimeout(() => this.textInput.nativeElement.focus());
  }

  public deleteTodo(): void {
    this.store.dispatch(TodoActions.deleteTodo({ id: this._todo.id }));
  }
}
