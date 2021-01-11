import React from 'react';

import DateFormatter from './DateFormatter';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      anotherField: "anotherValue"
    };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>A simple clock</h1>
        <DateFormatter date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
