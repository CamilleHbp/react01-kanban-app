import React from 'react';

function Notes(props) {
  const { notes } = props;
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.task}</li>
      ))}
    </ul>
  );
}

export default Notes;
