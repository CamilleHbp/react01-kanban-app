import React from 'react';
import Note from './Note';
import Editable from './Editable';
import './NoteList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, startEditNote, finishEditNote } from 'store/noteActions';
import { getNotesArray } from 'store/noteReducer';

function NoteList() {
  const notes = useSelector(store => {
    return getNotesArray(store.notes); // We return the notes as an array to map over it
  });
  const dispatch = useDispatch();

  const handleUpdateNote = (id, content) => {
    dispatch(finishEditNote(id, content));
  };

  return (
    <ul className="notelist">
      {notes.map(({ id, editing, content }) => (
        <li key={id}>
          <Note onDelete={() => dispatch(deleteNote(id))}>
            <Editable
              editing={editing}
              value={content}
              onDisplayClick={() => dispatch(startEditNote(id))}
              onEdit={handleUpdateNote.bind(null, id)}
            />
          </Note>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
