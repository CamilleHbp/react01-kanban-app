import React, { useState } from 'react';
import uuid from 'uuid';
import Notes from './components/Notes';
import './App.scss';

function App() {
  // Declare a new state variable using React { useState } Hook
  const initialNotes = [
    {
      id: uuid.v4(),
      editing: false,
      task: 'Learn React'
    },
    {
      id: uuid.v4(),
      editing: false,
      task: 'Do laundry'
    }
  ];

  const [notes, setNotes] = useState(initialNotes);

  const handleAddNote = task => {
    setNotes([
      ...notes,
      {
        id: uuid.v4(),
        editing: false,
        task: task
      }
    ]);
  };

  const handleDeleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    console.log('onDeleteNote');
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (id, value, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    console.log('onEditNote');
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.editing = false;
          note.task = value;
        }
        return note;
      })
    );
  };

  const handleClickNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    console.log('onClickNote');
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.editing = true;
        }
        return note;
      })
    );
  };

  return (
    <div className="App">
      <button onClick={() => handleAddNote('Edit me')}>+</button>
      <Notes
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
        onNoteClick={handleClickNote}
      />
    </div>
  );
}

export default App;
