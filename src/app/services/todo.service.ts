export class TodoService {
  todos: any[] = [];

  constructor() {
    this.todos = this.getTodosFromStore() || [];
  }

  addTodo(todo: string) {
    this.todos.push({content: todo, id: Math.floor(Math.random() * 10000), isComplete: false});
    this.saveTodosToStore();
  }

  changeTodoStatus(todo) {
    const foundTodo = this.getTodoById(todo.id);
    foundTodo[0].todo.isComplete = !foundTodo[0].todo.isComplete;
    this.saveTodosToStore();
  } 

  getTodos() {
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
    return JSON.parse(window.sessionStorage.getItem('todos'));
  }

  saveTodosToStore() {
    let store = window.sessionStorage;
    store.setItem('todos', JSON.stringify(this.todos));
  }

}