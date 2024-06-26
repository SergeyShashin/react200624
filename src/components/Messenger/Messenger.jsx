import './Messenger.css';

import React, { Component } from "react";
import {Layout} from "components/Layout"


export class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

  }

  render() {
    return (
      <div className='messenger'>
        <Layout/>
      </div>
    );
  }
}