import { useState } from "preact/hooks"
import {Button} from '../../components/base/Btn';
import {addTodo} from '../../_lib/func/todo.jsx';
import {text} from '../../_lib/signals/todo.jsx';
const TodoForm = () => {  
  const onSubmit = e => {
    alert("Submitted a Todo.")
    e.preventDefault();
  }

  const onInput = e => {
    text.value = e.currentTarget.value;
  }
   
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text.value} onInput={onInput} />
      <Button type="submit" onClick={addTodo} content={"Submit"}/>
    </form>
  )
}
export {TodoForm}



