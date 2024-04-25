import {countReducer} from '../lib/reducers/countReducer.js';
import { Button } from './base/_BaseExporter';
import {useReducer} from 'preact/hooks';
function Counter() {;
  const initialState = 0;
  const [count, dispatch] = useReducer(countReducer, initialState)
  return (
    <div>w
      <p>Counter: {count}</p>
      <Button action={() => dispatch('increment')} text={"Increment"} />
      <Button action={() => dispatch('decrement')} text={"decrement"} />
      <Button action={() => dispatch('reset')} text={"reset"} />
      <Button action={() => dispatch('log')} text={"log"} />
    </div>
  )
}

export {Counter};