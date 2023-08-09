import './App.css';
import React, { useState } from 'react';
import BirthdayCard from './components/BirthdayCard';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="container">
        <h1>{people.length} Birthdays Today</h1>
        {people.map((person) => (
          <BirthdayCard props={person} />
        ))}
        <button onClick={() => setPeople([])}>clear all</button>
      </div>
    </>
  );
}

export default App;
