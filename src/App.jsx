import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Notes from 'components/Notes';
import AddNote from 'components/AddNote';
import noteReducer from 'store/noteReducer';
import { loadState, saveState } from 'store/localStorage';
import './App.scss';

function App() {
  // Initial notes
  const initialState = loadState();

  const store = createStore(noteReducer, initialState);
  store.subscribe(() => {
    saveState(store.getState());
  });

  return (
    <Provider store={store}>
      <AddNote />
      <Notes />
    </Provider>
  );
}

export default App;
