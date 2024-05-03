import {todos} from '../signals/todos';
import {text} from '../signals/text';
const addTodo = () => {
  todos.value = [...todos.value, {text: text.value}];
  text.value = "";
}

export {addTodo};