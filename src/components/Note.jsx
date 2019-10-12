import React from 'react';
import './Note.scss';

function Note({ task, onDelete }) {
  return (
    <div>
      <span>{task}</span>
      <button className="note-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
}

export default Note;
