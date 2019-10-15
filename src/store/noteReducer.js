import uuid from 'uuid';
import {
  ADD_NOTE as CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  UPDATE_NOTE
} from 'store/noteActions';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 */
function noteReducer(state, action) {
  switch (action.type) {
    case CREATE_NOTE:
      console.log('Reducer: addNote');
      return [
        ...state,
        {
          id: uuid.v4(),
          editing: false,
          task: action.content
        }
      ];
    case DELETE_NOTE:
      console.log('DELETE ID: ' + action.id);
      return state.filter(note => note.id !== action.id);
    case EDIT_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          note.editing = true;
        }
        return note;
      });
    case UPDATE_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          console.log('DELETE ID: ' + action.id);
          console.log('DELETE Content: ' + action.content);
          note.editing = false;
          note.task = action.content;
        }
        return note;
      });
    default:
      return state;
  }
}

export default noteReducer;
