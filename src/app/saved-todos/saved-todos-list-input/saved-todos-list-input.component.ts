import { Component, ViewChild } from '@angular/core';

// Services
import { SavedTodosListService } from '../../services/saved-todos-list.service';

@Component({
  selector: 'app-saved-todos-list-input',
  templateUrl: './saved-todos-list-input.component.html'
})

export class SavedTodosListInputComponent {

  @ViewChild('todoListInput') todoListInput;

  constructor(private savedTodoListService: SavedTodosListService) { }

  onTodoListInput(event) {
    if(event.keyCode === 13) {
      this.savedTodoListService.createNewList(event.target.value);
      this.clearTodoListInput();
    }
  }

  clearTodoListInput() {
    this.todoListInput.nativeElement.value = ''
  }
} 