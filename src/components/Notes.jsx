import React from 'react';
import Note from './Note';

// We provide an empty default delete function
function Notes({ notes, onDelete = () => {} }) {
  return (
    <ul>
      {notes.map(({ id, task }) => (
        <li key={id}>
          <Note task={task} onDelete={onDelete.bind(null, id)} />
        </li>
      ))}
    </ul>
  );
}

export default Notes;
