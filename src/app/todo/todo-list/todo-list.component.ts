import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { Todo } from '../../models/todo.model';

// Services
import { TodoService } from '../../services/todo.service';
import { SavedTodosListService } from '../../services/saved-todos-list.service';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter: string = 'all';

  constructor(private todoService: TodoService, private savedTodoListService: SavedTodosListService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  filterTodos(filter: string) {
    this.filter = filter;
    this.todos = this.todoService.getFilteredTodoList(filter);
  }

}