import { Component, OnInit } from '@angular/core';

// Models
import { Todo } from '../../models/todo.model';

// Services
import { TodoService } from '../../services/todo.service';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter: string = 'all';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  filterTodos(filter: string) {
    this.filter = filter;
    this.todos = this.todoService.getFilteredTodoList(filter);
  }

}