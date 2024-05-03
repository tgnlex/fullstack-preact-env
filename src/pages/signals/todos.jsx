import {signal} from "@preact/signals";
const todos = signal([
  {text: "Buy Groceries"},
  {text: "Walk the dog"},
]);  

export {todos};