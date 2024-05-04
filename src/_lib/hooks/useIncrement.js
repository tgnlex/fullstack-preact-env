import {useState, useCallback} from 'preact/hooks';
function useIncrement() {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  return { value, increment };
}
export {useIncrement};