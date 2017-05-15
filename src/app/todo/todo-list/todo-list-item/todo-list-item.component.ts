import { TodoService } from '../../../services/todo.service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html'
})

export class TodoListItemComponent {
  @Input() todo: any;
  @ViewChild('todoContent') todoContent: ElementRef;

  constructor(private todoService: TodoService) { }

  markAsComplete() {
    this.todoService.changeTodoStatus(this.todo);
    this.setIsCompleteStyle();
  }

  removeTodoItem() {
    this.todoService.removeTodo(this.todo);
  }

  setIsCompleteStyle() {
    if(this.todo.isComplete) {
      this.todoContent.nativeElement.classList.add('complete');
    } else {
      this.todoContent.nativeElement.classList.remove('complete');
    }
  }
}
