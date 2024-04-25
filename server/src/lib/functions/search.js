import {log, json, add} from './base.js';
const cleanQuery = (raw) => {
  const c1 = raw.charAt(0).toUpperCase();
  const c2 = raw.slice(1).toLowerCase();
  const query = c1 + c2;
  return query;
}
const searchByString = (object, field, query) => {
  const array = json(object);
  for(let i = 0; i < array.data.length; i++) {
    if (array.data[i][`${field}`]=== query) {
      log('api', array.data[i]);
      return array.data[i];
    }
  }      
  log('api', `No ${field} with the value of ${query} was found.`);
  return 'Not Found';
}; 
const idSearch = (data, id) => {
  const arr = json(data);
  if (arr.data[id]) {
    return arr.data[id];
  } else {
    return "Not Found"
  }
}
export {idSearch, cleanQuery, searchByString};