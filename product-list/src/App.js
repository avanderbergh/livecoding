import React from 'react';
import logo from './logo.svg';
import './App.css';

import Name from './Name.jsx';
import Job from './Job.jsx';

const names = ["Adriaan", "Mika", "Elaine"];

function App() {
  return (
    <section>
      {names.map((name, key) => <Name key={key} text={name} />)}
      <Job/>
    </section>
  );
}

export default App;
