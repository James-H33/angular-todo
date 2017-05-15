import { TodoService } from '../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: object[] = [];
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