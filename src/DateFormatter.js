import React from 'react';

function DateFormatter(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

export default DateFormatter;
