import React, { Component } from "react";

export class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };

    console.log(this.props.onSend)
    
  }

  handleChangeAuthor = (e) => {
    this.setState({author:e.target.value});
    console.log(this.state);
  };
  
  handleChangeText = (e) => {
    this.setState({text:e.target.value});
    console.log(this.state);
  };

  sendData=()=>{
    this.props.onSend({author:this.state.author, text: this.state.text});
  }


  render() {
    const { author } = this.state;
    const { text } = this.state;
    return (
      <div>
        <input value={author} type="text" placeholder="author" onChange={this.handleChangeAuthor} />
        <input value={text} type="text" placeholder="textMessage" onChange={this.handleChangeText} />
        <input type="submit" onClick={this.sendData} />
      </div>
    );
  }
}