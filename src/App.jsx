import React, { useState } from 'react';
import uuid from 'uuid';
import Notes from './components/Notes';
import './App.scss';

function App() {
  // Declare a new state variable using React { useState } Hook
  const initialNotes = [
    {
      id: uuid.v4(),
      task: 'Learn React'
    },
    {
      id: uuid.v4(),
      task: 'Do laundry'
    }
  ];

  const [notes, setNotes] = useState(initialNotes);

  const addNote = task => {
    setNotes([
      ...notes,
      {
        id: uuid.v4(),
        task: task
      }
    ]);
  };

  console.log(notes);
  return (
    <div className="App">
      <button onClick={() => addNote('New task')}>+</button>
      <Notes notes={notes} />
    </div>
  );
}

export default App;
