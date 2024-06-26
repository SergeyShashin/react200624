import './Layout.css';

import React, { Component } from "react";
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessageForm } from "components/MessageForm";
import { MessagesList } from "components/MessagesList";


export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

  }

  handleMessage = (e) => {
    this.setState({ messages: this.state.messages.concat({ author: e.author, text: e.text }) });
  };

  componentDidUpdate() {
    let { author } = this.state.messages[this.state.messages.length - 1];

    if (author !== 'Bot') {
      setTimeout(() => this.setState({ messages: this.state.messages.concat({ author: 'Bot', text: `${author}, Ваше сообщение получено.` }) }),
        888);
    }
  }

  render() {
    return (
      <div className="layout">
        <Header/>
        <div className='chatsAndMessages'>
          <ChatList />
          <div className='messages'>
            <MessageForm onSend={this.handleMessage} />
            <MessagesList messages={this.state.messages} />
          </div>
        </div>
      </div>
    )
  }

}