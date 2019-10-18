import { combineReducers } from 'redux';
import { noteReducer } from 'store/noteReducer';
import { laneReducer } from 'store/laneReducer';

export const combinedReducer = combineReducers({
  lanes: laneReducer,
  notes: noteReducer
});

export default combinedReducer;
