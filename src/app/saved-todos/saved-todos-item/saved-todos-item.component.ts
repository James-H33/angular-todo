import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { SavedTodosListService } from '../../services/saved-todos-list.service';

@Component({
  selector: 'app-saved-todo-item',
  templateUrl: './saved-todos-item.component.html'
})

export class SavedTodosItemComponent {
  @Input('todoList') todoList;

  constructor(private savedTodosListService: SavedTodosListService, private router: Router) {

  }

  onOpenSavedTodosList() {
    this.savedTodosListService.setActiveTodoList(this.todoList.id);
    this.router.navigate(['todos'])
  }

  removeSavedTodoList() {
    console.log('Is Called');
    this.savedTodosListService.removeSavedTodoList(this.todoList);
  }

}
