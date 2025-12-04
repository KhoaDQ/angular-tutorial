import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(todos => {
      this.todoItems.set(todos);
    });
  }
}
