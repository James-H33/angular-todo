import { Component } from '@angular/core';

// Services
import { SavedTodosListService } from '../../services/saved-todos-list.service';

@Component({
  selector: 'app-saved-todos-list',
  templateUrl: 'saved-todos-list.component.html'
})  

export class SavedTodosListComponent {

  public savedTodoList: object[] = [];

  constructor(private savedTodosListService: SavedTodosListService) {
    this.savedTodoList = this.savedTodosListService.getSavedTodosList();
    console.log(this.savedTodoList);
  }
}