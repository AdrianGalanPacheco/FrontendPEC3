import Todo from "../models/todo.model";

/**
 * @class Service
 *
 * Manages the data of the application.
 */

class TodoService {
  // Properties
  todos: Todo[];
  // It receives an array of Todo and returns void and an empty function is assigned. This avoids errors when callback is called before registered
  // It also avoids null and undefined types and their verification
  onTodoListChanged: (todos: Todo[]) => void = () => {};

  // Constructor
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]").map(
      // TODO structure
      (todo: { text: string; complete?: boolean }) =>
        new Todo({
          text: todo.text,
          complete: todo.complete,
        })
    );
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));
    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText,
          })
        : todo
    );
    this._commit(this.todos);
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._commit(this.todos);
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? new Todo({
            ...todo,
            complete: !todo.complete,
          })
        : todo
    );
    this._commit(this.todos);
  }
}

export default TodoService;
