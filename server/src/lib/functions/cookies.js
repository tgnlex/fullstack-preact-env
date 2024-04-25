import {timestamp, date, time} from 'datetime.js';
import {cookieError} from './errors.js';
import {log} from './base.js';

const cookieValidator = async (cookie) => {
  try {
    await externallyValidateCookie(cookie);
  } catch {
    throw cookieError;
  }
};
const timestampCookie = (res) => {
  res.cookie('Timestamp', `${timestamp}`);
  log('http', 'Set Time Cookie');
}
const dateCookie = (res) => {
  res.cookie('Date', `${date}`);
  log('http', 'Set Date Cookie')
}

const timeCookie = (res) => {
  res.cookie('Time', `${time}`)
  log('http', `Set timestamp Cookie.`)
}



export {dateCookie, timeCookie, timestampCookie, cookieValidator}