import { combineReducers } from 'redux';
import { noteReducer } from 'store/noteReducer';

export const combinedReducer = combineReducers({
  notes: noteReducer
});

export default combinedReducer;
