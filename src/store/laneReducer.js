import {
  ATTACH_TO_LANE,
  CREATE_LANE,
  DELETE_LANE,
  DETACH_FROM_LANE,
  START_EDIT_LANE,
  FINISH_EDIT_LANE
} from 'store/laneActions';
import { combineReducers } from 'redux';

function lane(state, action) {
  switch (action.type) {
    case ATTACH_TO_LANE:
      if (state.id === action.id) {
        state.notes = [...state.notes, action.noteId];
      } else {
        console.warn('Could not attacht to lane: ' + action.id);
      }
      return state;
    case CREATE_LANE:
      return {
        id: action.id,
        editing: false,
        title: action.title,
        notes: []
      };
    case DETACH_FROM_LANE:
      if (state.id === action.id) {
        state.notes = state.notes.filter(id => id !== action.noteId);
      } else {
        console.warn('Could not detach from lane: ' + action.id);
      }
      return state;
    case START_EDIT_LANE:
      if (state.id === action.id) {
        state.editing = true;
      }
      return state;
    case FINISH_EDIT_LANE:
      if (state.id === action.id) {
        state.editing = false;
        state.title = action.title;
      }
      return state;
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case ATTACH_TO_LANE:
    case CREATE_LANE:
    case DETACH_FROM_LANE:
    case START_EDIT_LANE:
    case FINISH_EDIT_LANE:
      return {
        ...state,
        [action.id]: lane(state[action.id], action)
      };
    case DELETE_LANE:
      delete lane[action.id];
      return state;
    default:
      return state;
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case CREATE_LANE:
      return [...state, action.id];
    case DELETE_LANE:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

export const getLanesArray = state => state.allIds.map(id => state.byId[id]);
export const getLaneNoteIdArray = (state, laneId) => {
  console.log('State: ' + state);
  console.log('NOTES: ' + state.byId[laneId].notes);
  return state.byId[laneId].notes;
};

export const laneReducer = combineReducers({ byId, allIds });

export default laneReducer;
