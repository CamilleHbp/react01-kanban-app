import { combineReducers } from 'redux';
import uuid from 'uuid';
import {
  CREATE_NOTE,
  DELETE_NOTE,
  START_EDIT_NOTE,
  FINISH_EDIT_NOTE
} from 'store/noteActions';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 */
function note(state, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        id: action.id,
        editing: false,
        content: action.content
      };
    case START_EDIT_NOTE:
      console.log(state);
      if (state.id !== action.id) {
        return state;
      }
      state.editing = true;
      return state;
    case FINISH_EDIT_NOTE:
      if (state.id !== action.id) {
        return state;
      }
      state.editing = false;
      state.content = action.content;
      return state;
    default:
      return state;
  }
}

/**
 * This reducer takes the notes object and maps the result of the note function to the id of the note.
 */
function byId(state = {}, action) {
  switch (action.type) {
    case CREATE_NOTE:
    case START_EDIT_NOTE:
    case FINISH_EDIT_NOTE:
      return {
        ...state,
        [action.id]: note(state[action.id], action)
      };
    case DELETE_NOTE:
      console.log(action.id);
      delete state[action.id];
      return state;
    default:
      return state;
  }
}

/**
 * This reducer simply adds the note's id to the [notes.allId] array if we create a note, and filters it if we delete a note.
 */
function allIds(state = [], action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.id];
    case DELETE_NOTE:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

export const noteReducer = combineReducers({ byId, allIds });

/**
 * Returns all notes as an array instead of an object
 */
export const getNotesArray = state => {
  return state.allIds.map(id => state.byId[id]);
};

export default noteReducer;
