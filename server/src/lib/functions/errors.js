import {BaseError, AuthError} from '../classes/ErrorClasses.js';

const cookieError = new BaseError({
  message: "Error while trying to validate cookie",
  description: "Used for handling exceptions that occur while validating cookies"
});

const loginError = new AuthError({
  auth_type: "login",
  message: 'Error occured while trying to authenticate user account for login.',
  description: 'Used for handling authentication failures and login errors.'
})

const registrationError = new AuthError({
  auth_type: "register",
  message: 'Error occured while trying to register user account'
})

export {registrationError, loginError, cookieError};