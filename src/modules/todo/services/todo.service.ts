import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

interface ApiTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  public currentPage: number = 1;
  public ipp: number = 10;

  constructor(
    private http: HttpClient,
  ) { }

  public getTodos(nextPage: boolean = false): Observable<Todo[]> {
    if (nextPage) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }

    return this.http.get<ApiTodo[]>(this.apiUrl)
      .pipe(
        delay(2000),
        map(todos => todos.slice((this.currentPage - 1) * this.ipp, this.currentPage * this.ipp)),
        map(todos => todos.map(todo => new Todo(todo.title, todo.completed))),
      );
  }
}
