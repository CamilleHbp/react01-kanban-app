import React from 'react';
import Note from './Note';
import Editable from './Editable';

// We provide an empty default delete function
function Notes({
  notes,
  onDelete = () => {},
  onEdit = () => {},
  onNoteClick = () => {}
}) {
  return (
    <ul>
      {notes.map(({ id, editing, task }) => (
        <li key={id}>
          <Note
            onClick={onNoteClick.bind(null, id)}
            onDelete={onDelete.bind(null, id)}
          >
            <Editable
              editing={editing}
              value={task}
              onEdit={onEdit.bind(null, id)}
            />
          </Note>
        </li>
      ))}
    </ul>
  );
}

export default Notes;
