import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const name = "Leia Organa";
const url = "http://placekitten.com/480/480";
const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  email: "TheLastJedi@hotmail.com"
};

function formatUserName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getUserEmailLink(user) {
  return (
    <a href={`mailto:${user.email}`}>
      {formatUserName(user)}
    </a>
  );
}

function getUserGreeting(user) {
  // if (user) {
  //   return <h1>Hello {formatUserName(user)}</h1>;
  // } else {
  //   return <h1>Hello, stranger</h1>;
  // }
  return <h1>Hello {user ? formatUserName(user) : 'stranger'}!</h1>;
}

const element = (
  <div className="container">
    {getUserGreeting(user)}
    <img src={url} alt="Kitty" />
    <p>Email: {getUserEmailLink(user)}</p>
  </div>
);

console.log(element);

const appRoot = document.getElementById("root");
ReactDOM.render(
  element,
  appRoot
);
