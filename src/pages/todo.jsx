import {signal} from '@preact/signals';


function TodoList() {


  return (
    <div>
      <input />
      <button></button>
      <ul>
        {todos.value.map(todo => (
          <li>
            <button>
              
            </button>
          </li>
        ))}        
      </ul>
    </div>
  )
}

export {TodoList}