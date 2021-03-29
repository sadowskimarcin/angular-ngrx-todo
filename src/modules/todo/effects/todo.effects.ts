import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import * as TodoActions from 'Modules/todo/actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }


  // loadTodosRequest = createEffect(() => this.actions$.pipe(
  //   ofType(loadTodosRequest),
  //   switchMap(() => {
  //     return this.todosService.getAllTodos()
  //       .pipe(
  //         mergeMap((todos) => [
  //           loadTodos({ todos }),
  //           loadTodosSuccess(),
  //         ]),
  //         catchError(error => of(loadTodosFail({ error }))),
  //       );
  //   }),
  // ));

  public loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() => this.todoService.getTodos().pipe(
        map(todos => TodoActions.loadTodosSuccess({ todos })),
        catchError(error => of(TodoActions.loadTodosFail({ error: error.message }))),
      ))),
  );


  public loadNextPageTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadNextPageTodos),
      mergeMap(() => this.todoService.getTodos(true).pipe(
        map(todos => TodoActions.loadNextPageTodosSuccess({ todos })),
        catchError(error => of(TodoActions.loadTodosFail({ error: error.message }))),
      ))),
  );

  // public loadTodos$ = createEffect(() => this.actions$.pipe(
  //   ofType(TodoActions.loadTodos),
  //   switchMap(() =>
  //     this.todoService.getTodos()
  //       .pipe(
  //         mergeMap((todos) => [
  //           TodoActions.loadTodos({ todos }),
  //           TodoActions.loadTodosSuccess({ todos }),
  //         ]),
  //         catchError(error => of(TodoActions.loadTodosFail({ error }))),
  //       )
  //   )
  // ));


  //   mergeMap(() => this.todoService.getTodos()
  //     .pipe(
  //       map(todos => todos.map(todo => new Todo(todo.title, todo.completed))),
  //       map(todos => TodoActions.loadTodosSuccess({ todos })),
  //       catchError(error => of(TodoActions.loadTodosFail({ error }))),
  //     ))
  // ));
}
