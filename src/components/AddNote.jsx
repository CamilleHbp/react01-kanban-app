import React from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from 'store/noteActions';

function AddNote() {
  const dispatch = useDispatch();
  return (
    <button
      className="add-note"
      onClick={() => dispatch(createNote('Edit me'))}
    >
      +
    </button>
  );
}

export default AddNote;
