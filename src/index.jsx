import React from "react";
import ReactDom from "react-dom/client";
import { App } from "components/App";

console.log(App);

// let element = <h1>Привет.) Реакт работает.)</h1>;

// let messages = ['Привет, Друг!)', 'Как твои дела?'];
// const Message = (props) => <div>{props.text}</div>;

// const MessageList = (props) => props.messages.map(message => <Message text={message} />);

const domContainer = document.getElementById('root');
const root = ReactDom.createRoot(domContainer);

root.render(<App />);