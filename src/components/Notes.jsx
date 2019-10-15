import React from 'react';
import Note from './Note';
import Editable from './Editable';
import './Notes.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, editNote, updateNote } from 'store/noteActions';

// We provide an empty default delete function
function Notes() {
  const notes = useSelector(store => store);
  const dispatch = useDispatch();

  const handleUpdateNote = (id, task) => {
    dispatch(updateNote(id, task));
  };

  return (
    <ul className="notes">
      {notes.map(({ id, editing, task }) => (
        <li key={id}>
          <Note
            onClick={() => dispatch(editNote(id))}
            onDelete={() => dispatch(deleteNote(id))}
          >
            <Editable
              editing={editing}
              value={task}
              onEdit={handleUpdateNote.bind(null, id)}
            />
          </Note>
        </li>
      ))}
    </ul>
  );
}

export default Notes;
