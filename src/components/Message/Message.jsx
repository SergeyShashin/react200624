import './Message.scss';
import React, { Component } from "react";
import classNames from 'classnames';

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  // get direction() {
  //   return this.props.message.author === 'Bot' ? 'end' : 'start';
  // }

  render() {
    const { author, text } = this.props.message;
    const classes = classNames('message', {
      'message-owner': author !== 'Bot',
      'message-companion': author === 'Bot'
    });

    return (
      // <div className='message' style={{ alignSelf: `flex-${this.direction}` }}>
      <div className={classes}>
        <div>{text}</div>
        <div className='message-sender'>{author}</div>
      </div>
    );
  }
}