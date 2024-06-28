import 'assets/global.css';

import React, { Component } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "components/App";
import { Messenger } from "components/Messenger";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from './routes';

// console.log(App);

// let element = <h1>Привет.) Реакт работает.)</h1>;

// let messages = ['Привет, Друг!)', 'Как твои дела?'];
// const Message = (props) => <div>{props.text}</div>;

// const MessageList = (props) => props.messages.map(message => <Message text={message} />);

// class App extends Component {
//   render() {
//     <BrowserRouter>
//       <Routes>
//         {routes.map((route, idx) => <Route key={idx} {...route} />)}
//       </Routes>
//     </BrowserRouter>
//   }
// }

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Messenger />} />
      <Route path='/chats/:id' element={<Messenger />} />
    </Routes>
  </BrowserRouter>
);


