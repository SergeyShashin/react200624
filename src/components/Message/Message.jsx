import './Message.scss';
import React, { Component } from "react";
import classNames from 'classnames';

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  get direction() {
    return this.props.message.author === 'Bot' ? 'end' : 'start'
  }

  render() {
    const classes = classNames('message', {
      'message-owner': this.props.message.author !== 'Bot',
      'message-companion': this.props.message.author === 'Bot'
    });

    return (
      // <div className='message' style={{ alignSelf: `flex-${this.direction}` }}>
      <div className={classes}>
        <div>{this.props.message.author}: </div>
        <div>{this.props.message.text}</div>
      </div>
    );
  }
}