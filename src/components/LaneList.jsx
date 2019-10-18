import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNote from 'components/AddNote';
import NoteList from 'components/NoteList';
import { getLanesArray } from 'store/laneReducer';
import Editable from './Editable';
import { startEditLane, finishEditLane } from 'store/laneActions';

export function LaneList() {
  const lanes = useSelector(store => {
    return getLanesArray(store.lanes);
  });
  const dispatch = useDispatch();
  const handleUpdateLane = (id, title) => {
    dispatch(finishEditLane(id, title));
  };

  return (
    <ul className="lanelist">
      {lanes.map(({ id, editing, title }) => {
        return (
          <li key={id}>
            <Editable
              editing={editing}
              value={title}
              onDisplayClick={() => dispatch(startEditLane(id))}
              onEdit={handleUpdateLane.bind(null, id)}
            />
            <AddNote laneId={id} />
            <NoteList laneId={id} />
          </li>
        );
      })}
    </ul>
  );
}

export default LaneList;
