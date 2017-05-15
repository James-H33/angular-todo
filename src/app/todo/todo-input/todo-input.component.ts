import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html'
})

export class TodoInputComponent {
  @ViewChild('todoInput') todoInput: ElementRef;

  constructor(private todoService: TodoService) { }

  onTodoInput(event) {
    if(event.keyCode === 13) {
      this.addTodo(event.target.value);
      this.clearTodoInput();
    }
  }

  clearTodoInput() {
    this.todoInput.nativeElement.value = ''
  }

  addTodo(value: string) {
    this.todoService.addTodo(value);
  }

}
