export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) {
      return [];
    }
    return JSON.parse(serialisedState);
  } catch (err) {
    return [];
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
