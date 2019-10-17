import uuid from 'uuid';
export const CREATE_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const START_EDIT_NOTE = 'EDIT_NOTE';
export const FINISH_EDIT_NOTE = 'UPDATE_NOTE';

export const createNote = content => ({
  type: CREATE_NOTE,
  id: uuid.v4(),
  content: content
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id: id
});

export const startEditNote = id => ({
  type: START_EDIT_NOTE,
  id: id
});

export const finishEditNote = (id, content) => ({
  type: FINISH_EDIT_NOTE,
  id: id,
  content: content
});

export default {
  createNote,
  deleteNote,
  startEditNote,
  finishEditNote
};
