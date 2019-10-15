import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from 'store/noteActions';

function AddNote({ onAdd = () => {} }) {
  const dispatch = useDispatch();
  return (
    <button className="add-note" onClick={() => dispatch(addNote('Edit me'))}>
      +
    </button>
  );
}

export default AddNote;
