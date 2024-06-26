import './MessageForm.css';

import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

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

  handleCtrlEnter = (e) => {
    if (e.ctrlKey && e.keyCode === 13) {
      this.sendData();
    };
  }

  render() {
    const { author, text } = this.state;
    return (
      <div className="messageForm">
        <TextField label="author" variant="standard" value={author} onChange={this.handleChangeAuthor} />
        <TextField label="text" variant="standard" value={text} onChange={this.handleChangeText} onKeyDown={this.handleCtrlEnter} />
        <Button label="send" onClick={this.sendData} variant="text" endIcon={<SendIcon />} size='large'/>
      </div>
    );
  }
}