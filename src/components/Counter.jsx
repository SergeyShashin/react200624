import React, { Component } from "react";
import { PropTypes } from 'prop-types';

export class Counter extends Component {
  static propTypes = {
    initialValue: PropTypes.number
  }
  constructor(props) {
    super(props);


    this.state = {
      counter: this.props.initialValue,
    };

  }

  interval = this.interval = setInterval(() => console.log(':)'), 200);

  handleClick = (e) => {
    this.setState(prevState => ({ counter: prevState.counter + Number(e.target.dataset.counter) }));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    let { counter } = this.state;
    return (
      <div>
        <button data-counter={1} onClick={this.handleClick}>+</button>
        <span>{counter}</span>
        <button data-counter={-1} onClick={this.handleClick}>-</button>
      </div>
    );
  }
}