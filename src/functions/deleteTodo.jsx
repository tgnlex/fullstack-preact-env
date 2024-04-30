import {todos} from '../signals/todos.jsx';
function deleteTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo);
}
export {deleteTodo};