export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const addNote = task => ({
  type: ADD_NOTE,
  content: task
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id: id
});

export const editNote = id => ({
  type: EDIT_NOTE,
  id: id
});

export const updateNote = (id, task) => ({
  type: UPDATE_NOTE,
  id: id,
  content: task
});

export default { addNote, deleteNote, editNote, updateNote };
