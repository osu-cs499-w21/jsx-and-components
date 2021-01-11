import React from 'react';

// function Greeting(props) {
//   // console.log("== props", props);
//   return <h1>Hello, {props.name}!</h1>;
// }

class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default Greeting;
