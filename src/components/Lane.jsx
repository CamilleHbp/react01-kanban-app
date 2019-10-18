import React from 'react';
import './Lane.scss';

function Lane({ children, onDelete }) {
  return (
    <div className="lane">
      {children}
      <button className="lane-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
}

export default Lane;
