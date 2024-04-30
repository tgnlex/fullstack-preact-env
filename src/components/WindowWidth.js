import {useState, useEffect} from 'preact/hooks';
import {Text} from './atomic/_exporter.js'; 
function WindowWidth(props) {
  const [width, setWidth] = useState(0);

  function onResize() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const content = `Window width: ${width}`;
  return <Text content={content} />
}

export {WindowWidth};