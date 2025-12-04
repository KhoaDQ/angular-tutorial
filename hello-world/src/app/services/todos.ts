import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  fetchTodos() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');
  }
}
