import './MessagesList.css';

import React, { Component } from "react";
import { Message } from "components/Message";

export class MessagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    const { messages } = this.props;
    return (
      <div className='messagesList'>
        {messages.map((message, idx) => <Message message={message} key={idx} />)}

      </div>
    );
  }
}