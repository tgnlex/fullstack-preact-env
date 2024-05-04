import { TodoForm } from '../components/todo/todoForm.jsx';
import { TodoList } from '../components/todo/todoList.jsx';
import {text, todos, completed} from '../_lib/signals/todo.js';
function TodoPage() {
  return (
    <main className="todo--main">
      <h1 className="todo--heading">Todo List</h1>
      <TodoList/>      
      <TodoForm/>
    </main>
  )
}
export {TodoPage}