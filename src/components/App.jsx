import React, { Component } from "react";
import { Counter } from "components/Counter";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      interval: null,
    };

  }

  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    let { isVisible } = this.state;
    return (
      <div onClick={this.handleToggle}>
        {isVisible && <Counter />}
        <button onClick={this.handleToggle}>toggle</button>

      </div>
    );
  }
}