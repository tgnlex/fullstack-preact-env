import { batch } from '@preact/signals';
import {todos, text} from '../signals/todo';
const addTodo = () => {
  batch(() => {
  todos.value = [...todos.value, {text: text.value}];
  text.value = "";
  });
}
function deleteTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo);
}
export {addTodo, deleteTodo};