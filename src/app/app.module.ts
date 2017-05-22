import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { TodoComponent } from './todo/todo.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo/todo-list/todo-list-item/todo-list-item.component';

import { SavedTodosComponent } from './saved-todos/saved-todos.component';
import { SavedTodosListComponent } from './saved-todos/saved-todos-list/saved-todos-list.component';
import { SavedTodosItemComponent } from './saved-todos/saved-todos-item/saved-todos-item.component';
import { SavedTodosListInputComponent } from './saved-todos/saved-todos-list-input/saved-todos-list-input.component';


// Services 
import { TodoService } from './services/todo.service';
import { SavedTodosListService } from './services/saved-todos-list.service';

const appRoutes: Routes = [
    { path: '', component: SavedTodosComponent },
    { path: 'saved-lists', component: SavedTodosComponent },
    { path: 'todos', component: TodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SavedTodosComponent, 
    SavedTodosListComponent,
    SavedTodosItemComponent,
    SavedTodosListInputComponent,
    TodoComponent, 
    TodoInputComponent, 
    TodoListComponent, 
    TodoListItemComponent, 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService, SavedTodosListService],
  bootstrap: [AppComponent]
})

export class AppModule { }
