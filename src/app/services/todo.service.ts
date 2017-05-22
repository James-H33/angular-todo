import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';

// Services
import { SavedTodosListService } from './saved-todos-list.service';

@Injectable()

export class TodoService {

  todos: any[] = [];

  constructor(private savedTodoListService: SavedTodosListService) { }

  addTodo(todo: string) {
    this.todos.push(new Todo(todo, Math.floor(Math.random() * 10000), false));
    this.saveTodosToStore();
  }

  changeTodoStatus(todo) {
    const foundTodo = this.getTodoById(todo.id);
    foundTodo[0].todo.isComplete = !foundTodo[0].todo.isComplete;
    this.saveTodosToStore();
  } 

  getTodos() {
    this.todos = this.getTodosFromStore() || [];
    return this.todos;
  }

  getTodoById(id: number) {
    return this.todos
      .map((todo, pos) =>  {return {todo: todo, index: pos}})
        .filter((item) => item.todo.id === id)
  }

  getFilteredTodoList(filterType: string) {
    if(filterType === 'active') {
      return this.todos.filter((item) => item.isComplete === false);
    } else if(filterType === 'complete') {
      return this.todos.filter((item) => item.isComplete === true);
    } 
      return this.todos;
  }

  removeTodo(todo: any) {
    const foundTodo = this.getTodoById(todo.id);
    if(foundTodo && foundTodo.length !== 0) {
      this.todos.splice(foundTodo[0].index, 1);
      this.saveTodosToStore();
    }
  } 

  getTodosFromStore() {
    console.log(this.savedTodoListService.getActiveTodoList());
    return this.savedTodoListService.getActiveTodoList();
  }

  saveTodosToStore() {
    this.savedTodoListService.saveTodosToActiveList(this.todos);
  }

}