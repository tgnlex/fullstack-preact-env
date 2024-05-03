import {Component} from 'preact';

class Clock extends Component {
  constructor() {
    super()
    this.state = {time: Date.now()}
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return <span>{time}</span>
  }
}

export {Clock};