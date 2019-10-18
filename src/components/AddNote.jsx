import React from 'react';
import uuid from 'uuid';
import { useDispatch } from 'react-redux';
import { createNote } from 'store/noteActions';
import { attachToLane } from 'store/laneActions';

function addNoteToLane(dispatch, laneId) {
  const noteId = uuid.v4();

  dispatch(createNote(noteId, laneId, 'Edit me'));
  dispatch(attachToLane(laneId, noteId));
}

function AddNote({ laneId }) {
  const dispatch = useDispatch();
  return (
    <button
      className="add-note"
      onClick={() => addNoteToLane(dispatch, laneId)}
    >
      +
    </button>
  );
}

export default AddNote;
