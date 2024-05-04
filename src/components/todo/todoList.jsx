import {deleteTodo} from '../../_lib/func/todo.jsx';
import {todos} from '../../_lib/signals/todo.jsx';

function TodoList() {
  return (
   <ul>
    {todos.value.map(todo => (
      <li>
        {todo.text} {' '}
        <button onClick={deleteTodo}>x</button>
      </li>
    ))}        
  </ul>
  )
}

export {TodoList};