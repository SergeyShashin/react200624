import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }


  render() {
    return (
      <li>
        <span>{this.props.message.author}: </span>
        <span>{this.props.message.text}</span>
      </li>
    );
  }
}