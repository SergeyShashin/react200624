import React, { Component } from "react";
import PropTypes from 'prop-types';

export class MessageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };

  }

  static propTypes = {
    onsend: PropTypes.func,
  }

  handleChangeAuthor = (e) => {
    this.setState({ author: e.target.value });
  };

  handleChangeText = (e) => {
    this.setState({ text: e.target.value });
  };

  sendData = () => {
    this.props.onSend({ author: this.state.author, text: this.state.text });
    this.setState({ text: '' });
  }


  render() {
    const { author, text } = this.state;
    return (
      <div>
        <input value={author} type="text" placeholder="author" onChange={this.handleChangeAuthor} />
        <input value={text} type="text" placeholder="textMessage" onChange={this.handleChangeText} />
        <input type="submit" onClick={this.sendData} />
      </div>
    );
  }
}