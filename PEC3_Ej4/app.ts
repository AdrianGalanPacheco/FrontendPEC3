import TodoController from './controllers/todo.controller';
import TodoService from './services/todo.service';
import TodoView from './views/todo.views';
import './style.css';

// App initialization
const app = new TodoController(
  new TodoService(),
  new TodoView()
);
