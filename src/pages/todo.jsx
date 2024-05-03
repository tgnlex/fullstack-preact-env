import {deleteTodo} from '../functions/deleteTodo.jsx';
import { text } from "../signals/text";
import { todos } from "../signals/todos";
function TodoList() {
  const handleIn = event => (text.value = event.currentTarget.value);
  return (
    <div>
      <input value={text.value} onInput={handleIn} />
      <button></button>
      <ul>
        {todos.value.map(todo => (
          <li>
            {todo.text} {' '}
            <button onClick={deleteTodo}>x</button>
          </li>
        ))}        
      </ul>
    </div>
  )
}
export {TodoList}