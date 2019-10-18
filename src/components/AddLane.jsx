import React from 'react';
import { useDispatch } from 'react-redux';
import { createLane } from 'store/laneActions';

function AddLane() {
  const dispatch = useDispatch();
  return (
    <button
      className="add-note"
      onClick={() => dispatch(createLane('New lane'))}
    >
      +
    </button>
  );
}

export default AddLane;
