const noop = () => {
  return;
}
const nullop = () => {
  return null;
}
const read = (data) => {
  return data;
} 
const log = (name, data) => {
  const src = name.toUpperCase();
  console.log(`[${src}] ${data}`)
}
const sleep = (i) => {
    const duration = i * 1000;
    log('server', `Will sleep for ${i} second(s)`)
    setTimeout(() => log('server',  'sleeping...'), duration)
  }

 const sleepMs = (i) => {
    log('server', `Will sleep for ${i} milliseconds`, )
    setTimeout(() => log('server', 'sleeping...'), i);
 }
const add = (a, b) => {
  let c = a + b;
  return c;
}
const json = (object) => {
  const data = JSON.stringify(object);
  log('lib', `Converted ${object} to json string`)
  return data;
}
const genElementStr = (type, value) => {
  const element = `<${type}>${value}</${type}>`
  return element;
}

export {noop, nullop, add, read, log, json, sleep, sleepMs, genElementStr};