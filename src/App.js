import React, { Component } from 'react';
import CountUp from 'react-countup';
import './App.css';

class App extends Component{
  state = {
    number: 0,
    clock: null,
  }

  componentDidMount() {
    this.renderNumber();
    const clock = setInterval(this.renderNumber, 5000);
    this.setState({
      clock
    })
  }

  componentWillUnmount() {
    const { clock } = this.state;
    clearInterval(clock)
  }

  renderNumber = () => {
    const number = Math.floor(Math.random() * 10000 + 1)
    this.setState({
      number
    })
  }


  render() {
    const { number } = this.state;
    return (
      <div className='container'>
        <CountUp className='middle' end={number} preserveValue/>
      </div>
    );
  }

}

export default App;
