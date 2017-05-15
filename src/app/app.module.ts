import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo/todo-list/todo-list-item/todo-list-item.component';

// Services 
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent, 
    TodoComponent, 
    TodoInputComponent, 
    TodoListComponent, 
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
