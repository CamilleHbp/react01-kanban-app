import React from 'react';

function AddNote({ onAdd = () => {} }) {
  return (
    <button className="add-note" onClick={onAdd.bind(null, 'Edit me')}>
      +
    </button>
  );
}

export default AddNote;
