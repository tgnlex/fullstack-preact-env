import {signal, computed} from '@preact/signals'
const todos = signal([]);
const text = signal("");

const completed = computed(() => {
  return todos.value.filter(todo => todo.completed).length;
});

export {todos, completed, text}