import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddLane from 'components/AddLane';
import combinedReducer from 'store/combinedReducer';
import LaneList from 'components/LaneList';
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
      <AddLane />
      <LaneList />
    </Provider>
  );
}

export default App;
