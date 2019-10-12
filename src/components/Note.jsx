import React from 'react';
import './Note.scss';

function Note({ children, onClick, onDelete }) {
  return (
    <div onClick={onClick}>
      {children}
      <button className="note-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
}

export default Note;
