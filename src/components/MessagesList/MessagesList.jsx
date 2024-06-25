import React, { Component } from "react";
import { Message } from "components/Message";

export class MessagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }



  render() {
    const {messages} = this.props;
    return (
      <ul>
        <h3>Сообщения:</h3>
        {messages.map((message, idx) => <Message message={message} key={idx}/>)}

      </ul>
    );
  }
}