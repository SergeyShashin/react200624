import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

  }

  handleClick = (e) => {
    this.setState(prevState => ({ counter: prevState.counter + Number(e.target.dataset.counter) }));
  }

  render() {
    let { counter } = this.state;
    return (
      <div>
        <h3>Привет из App</h3>
        <button data-counter={+1} onClick={this.handleClick}>+</button>
        <span>{counter}</span>
        <button data-counter={-1} onClick={this.handleClick}>-</button>
      </div>
    );
  }
}