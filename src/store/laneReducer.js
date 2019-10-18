import {
  ATTACH_TO_LANE,
  CREATE_LANE,
  DELETE_LANE,
  DETACH_FROM_LANE,
  UPDATE_LANE
} from 'store/laneActions';
import { combineReducers } from 'redux';

function lane(state, action) {
  switch (action.type) {
    case ATTACH_TO_LANE:
      if (state.id === action.id) {
        state.notes = [...state.notes, action.noteId];
      }
      return state;
    case CREATE_LANE:
      return {
        id: action.id,
        title: action.title,
        notes: []
      };
    case DETACH_FROM_LANE:
      console.log('Detach laneID: ' + action.id);
      console.log('Detach noteID: ' + action.noteId);
      if (state.id === action.id) {
        state.notes = state.notes.filter(id => id !== action.noteId);
      }
      return state;
    case UPDATE_LANE:
      if (state.id === action.id) {
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
    case UPDATE_LANE:
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
  return state.byId[laneId].notes;
  // const noteAllIds = state.byId;
  // const noteFilter = noteAllIds.filter(note => note.lane === laneId);
  // const noteMap = noteFilter.map(id => state.byId[id]);
  // console.log('Lane ID: ' + laneId);
  // console.log('Lane AllIds: ' + noteAllIds);
  // console.log('Filter: ' + noteFilter);
  // console.log('Map: ' + noteMap);
  // return noteMap;
};

export const laneReducer = combineReducers({ byId, allIds });

export default laneReducer;
