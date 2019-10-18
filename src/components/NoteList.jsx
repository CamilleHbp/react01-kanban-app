import React from 'react';
import Note from './Note';
import Editable from './Editable';
import './NoteList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, startEditNote, finishEditNote } from 'store/noteActions';
import { getLaneNoteIdArray } from 'store/laneReducer';
import { getLaneNoteArray } from 'store/noteReducer';
import { detachFromLane } from 'store/laneActions';

function NoteList({ laneId }) {
  // We return the notes as an array to map over it
  const notesId = useSelector(store => getLaneNoteIdArray(store.lanes, laneId));
  const notes = useSelector(store => getLaneNoteArray(store.notes, notesId));
  const dispatch = useDispatch();

  const handleUpdateNote = (id, content) => {
    dispatch(finishEditNote(id, content));
  };

  function deleteNoteFromLane(dispatch, laneId, noteId) {
    dispatch(detachFromLane(laneId, noteId));
    dispatch(deleteNote(noteId));
  }

  return (
    <ul className="notelist">
      {notes.map(({ id, lane, editing, content }) => {
        if (lane === laneId) {
          return (
            <li key={id}>
              <Note onDelete={() => deleteNoteFromLane(dispatch, lane, id)}>
                <Editable
                  editing={editing}
                  value={content}
                  onDisplayClick={() => dispatch(startEditNote(id))}
                  onEdit={handleUpdateNote.bind(null, id)}
                />
              </Note>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

export default NoteList;
