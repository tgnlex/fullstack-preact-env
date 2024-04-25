export class BaseError extends Error {
  message = "Default Error Message";
  options = [];
  setOptions = ({opts}) => this.options = [opts];
  setMessage = (message) => this.message = message;
  getMessage = () => {return this.message}
  setDescription = (description) => this.description = description;
  getDescription = () => {return this.description}
  logMessage = () => console.log(this.message);  
  logDescription = () => console.log(this.description);
  logOptions = () => 
  addOption = (option) => this.options.push(option);
  constructor(description) {
    super();
    this.description = description;
  }
}

export class AuthError extends BaseError() {
  auth_type = "login" | "registration" | "session";
  auth_message = `Authentication Error! Type: ${auth_type}`;
  message = "Default Auth Error Message"
}


