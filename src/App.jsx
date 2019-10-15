import React from 'react';
import uuid from 'uuid';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from 'store/noteReducer';
import Notes from 'components/Notes';
import AddNote from 'components/AddNote';
import './App.scss';

function App() {
  // Initial notes
  const initialState = [
    {
      id: uuid.v4(),
      editing: false,
      task: 'Learn React'
    },
    {
      id: uuid.v4(),
      editing: false,
      task: 'Do laundry'
    }
  ];

  const store = createStore(noteReducer, initialState);

  return (
    <Provider store={store}>
      <AddNote />
      <Notes />
    </Provider>
  );
}

export default App;
