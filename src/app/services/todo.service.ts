export class TodoService {
  todos: any[] = [
    {content: 'Go fishing', id: Math.floor(Math.random() * 10000), isComplete: false}, 
    {content: 'Eat food', id: Math.floor(Math.random() * 10000), isComplete: false}
  ];

  addTodo(todo: string) {
    this.todos.push({content: todo, id: Math.floor(Math.random() * 10000), isComplete: false});
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

  changeTodoStatus(todo) {
    const foundTodo = this.getTodoById(todo.id);
    foundTodo[0].todo.isComplete = !foundTodo[0].todo.isComplete;
  } 

  removeTodo(todo: any) {
    const foundTodo = this.getTodoById(todo.id);
    if(foundTodo && foundTodo.length !== 0) {
      this.todos.splice(foundTodo[0].index, 1);
    }
  } 

}