import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import NoteList from 'components/NoteList';
import AddNote from 'components/AddNote';
import combinedReducer from 'store/combinedReducer';
import { loadState, saveState } from 'store/localStorage';
import './App.scss';

function App() {
  // Initial notes
  const initialState = loadState();

  const store = createStore(combinedReducer, initialState);
  store.subscribe(() => {
    saveState(store.getState());
  });

  return (
    <Provider store={store}>
      <AddNote />
      <NoteList />
    </Provider>
  );
}

export default App;
