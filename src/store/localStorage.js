const initialState = {
  lanes: {
    byId: {
      lane1: {
        id: 'lane1',
        title: 'lane1',
        notes: ['note1', 'note2']
      },
      lane2: {
        id: 'lane2',
        title: 'lane2',
        notes: ['note3', 'note4']
      }
    },
    allIds: ['lane1', 'lane2']
  },
  notes: {
    byId: {
      note1: {
        id: 'note1',
        lane: 'lane1',
        editing: false,
        content: 'note1'
      },
      note2: {
        id: 'note2',
        lane: 'lane1',
        editing: false,
        content: 'note2'
      },
      note3: {
        id: 'note3',
        lane: 'lane2',
        editing: false,
        content: 'note3'
      },
      note4: {
        id: 'note4',
        lane: 'lane2',
        editing: false,
        content: 'note4'
      }
    },
    allIds: ['note1', 'note2', 'note3', 'note4']
  }
};

export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) {
      return initialState;
    }
    return JSON.parse(serialisedState);
  } catch (err) {
    return initialState;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};
