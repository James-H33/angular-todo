
interface TodosList {
  id: number,
  title: string,
  todos: object[]
}

export class SavedTodosListService {
  public activeTodoList: TodosList;
  public savedTodosList: TodosList[] = [];

  constructor() { 
    this.savedTodosList = this.getSavedTodosListFromStore() || [];
  }

  createNewList(title: string) {
    this.savedTodosList.push({
      id: Math.floor(Math.random() * 10000),
      title: title, 
      todos: []
    });
    this.saveTodoListToStore();
  }

  getActiveTodoList() {
    return this.activeTodoList.todos;
  }

  getSavedTodosList() {
    return this.savedTodosList;
  }

  getSavedTodosListById(id: number) {
    return this.savedTodosList.filter((list) => list.id === id)
  }

  getSavedTodosListFromStore() {
    return JSON.parse(window.sessionStorage.getItem('savedTodoList'));
  }

  removeSavedTodoList(todoList) {
    const index = this.savedTodosList.findIndex(list => list.id === todoList.id);
    this.savedTodosList.splice(index, 1);
    this.saveTodoListToStore();
  }

  saveTodoListToStore() {
    const store = window.sessionStorage;
    store.setItem('savedTodoList', JSON.stringify(this.savedTodosList));
  }

  saveTodosToActiveList(newTodos) {
    this.activeTodoList.todos =  newTodos;
    this.saveTodoListToStore();
  }

  setActiveTodoList(id: number) {
    this.activeTodoList = this.savedTodosList.filter((list) => list.id === id)[0];
  }

}