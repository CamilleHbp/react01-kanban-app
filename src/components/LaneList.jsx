import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNote from 'components/AddNote';
import Editable from 'components/Editable';
import Lane from 'components/Lane';
import NoteList from 'components/NoteList';
import { startEditLane, finishEditLane, deleteLane } from 'store/laneActions';
import { getLanesArray, getLaneNoteIdArray } from 'store/laneReducer';
import { getLaneNoteArray } from 'store/noteReducer';
import { deleteNote } from 'store/noteActions';
import './LaneList.scss';

export function LaneList() {
  const lanesIds = useSelector(store => getLanesArray(store.lanes));
  const lanes = useSelector(store => store.lanes);
  const notes = useSelector(store => store.notes);
  const dispatch = useDispatch();

  const handleUpdateLane = (id, title) => {
    dispatch(finishEditLane(id, title));
  };

  const handleDeleteLane = id => {
    console.log('Delete ID: ' + id);
    const noteIds = getLaneNoteIdArray(lanes, id);
    const laneNotes = getLaneNoteArray(notes, noteIds);

    laneNotes.forEach(noteId => {
      dispatch(deleteNote(noteId));
    });
    dispatch(deleteLane(id));
  };

  return (
    <ul className="lanelist">
      {lanesIds.map(({ id, editing, title }) => {
        return (
          <li className="lanelist-item" key={id}>
            <Lane onDelete={handleDeleteLane.bind(null, id)}>
              <Editable
                editing={editing}
                value={title}
                onDisplayClick={() => dispatch(startEditLane(id))}
                onEdit={handleUpdateLane.bind(null, id)}
              />
            </Lane>
            <AddNote laneId={id} />
            <NoteList laneId={id} />
          </li>
        );
      })}
    </ul>
  );
}

export default LaneList;
