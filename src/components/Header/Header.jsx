import './Header.css';

import React, { Component } from "react";


export class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <h2 className="header">
        Заголовок
      </h2>
    )
  }

}