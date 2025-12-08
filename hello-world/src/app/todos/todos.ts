import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  filterText = signal<string>('');

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(todos => {
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update(todos => todos.map(todo => {
      if (todo.id === todoItem.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }
}