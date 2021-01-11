import React from 'react';

import Greeting from './Greeting';
import Card from './Card';
import Clock from './Clock';

function App() {
  const names = [
    "Leia Organa",
    "Luke Skywalker",
    "Rey"
  ];

  return (
    <div>
    {names.map((name) => (
      <Card key={name}>
        <Greeting name={name} />
        <Clock />
      </Card>
    ))}
    </div>
  );

  // return (
  //   <div>
  //     <Card>
  //       <Greeting name="Leia Organa" anotherProp="someValue" />
  //       <h2>This is a subtitle</h2>
  //       <Clock />
  //       This is some text
  //     </Card>
  //     <Card>
  //       <Greeting name="Luke Skywalker" />
  //       <Clock />
  //     </Card>
  //     <Card>
  //       <Greeting name="Rey" />
  //       <Clock />
  //     </Card>
  //   </div>
  // );
}

export default App;
