

const reducer  = (state, action) => {
  switch (action) {
    case 'log': return console.log(`State: ${state}`);
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'loopback': return state;
    case 'reset': return state = 0;
    case 'noop': throw new Error('Noop');
    default: throw new Error('Unexpected action');
  }
}

const countReducer = reducer;
export {countReducer};