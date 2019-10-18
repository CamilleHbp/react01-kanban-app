import React from 'react';
import { useSelector } from 'react-redux';
import AddNote from 'components/AddNote';
import NoteList from 'components/NoteList';
import { getLanesArray } from 'store/laneReducer';

export function LaneList() {
  const lanes = useSelector(store => {
    console.log(store.lanes);
    return getLanesArray(store.lanes);
  });

  return (
    <ul className="lanelist">
      {lanes.map(({ id, title, notes }) => {
        return (
          <li key={id}>
            <p>{title}</p>
            <AddNote laneId={id} />
            <NoteList laneId={id} />
          </li>
        );
      })}
    </ul>
  );
}

export default LaneList;
