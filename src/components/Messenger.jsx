import React, { Component } from "react";
import { MessageForm } from "components/MessageForm";
import { MessagesList } from "components/MessagesList";

export class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{ author: 'Автор', text: 'Текст сообщения.' }]

    };

  }

  handleMessage = (e) => {
    this.setState({ messages: this.state.messages.concat({ author: e.author, text: e.text }) });
  };

  componentDidUpdate() {
    let lastMessages = this.state.messages[this.state.messages.length - 1];

    if (lastMessages.author !== 'Bot') {
      this.setState({ messages: this.state.messages.concat({ author:'Bot', text: `${lastMessages.author}, Ваше сообщение получено.` }) });
    }
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Messenger</h2>
        <MessageForm onSend={this.handleMessage} />
        <MessagesList messages={this.state.messages} />
      </div>
    );
  }
}