import {log} from './base.js';
const dt = new Date();

const getDate = () => {
  const date = dt.toLocaleDateString();
  return date;
}
const getTime = () => {
  const time = dt.toLocaleTimeString();
  return time;
}
const timestamp = () => {
  const timestamp = dt.toLocaleString();;
  return timestamp;
}
const logTimestamp = () => {  
  log('lib', `Timestamp: ${timestamp()}`); 
} 

export {dt, getDate, getTime, timestamp, logTimestamp}



