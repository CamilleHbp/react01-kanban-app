import React from 'react';

const Edit = ({ value, onEdit = () => {} }) => {
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      finishEdit(e);
    }
  };

  const finishEdit = e => {
    const value = e.target.value;

    if (onEdit) {
      onEdit(value, e);
    }
  };

  return (
    <input
      type="text"
      autoFocus="true"
      onKeyPress={onKeyPress}
      onBlur={finishEdit}
      defaultValue={value}
    />
  );
};

const Display = ({ value }) => <span>{value}</span>;

function Editable({ editing, value, onEdit = () => {} }) {
  if (editing) {
    return <Edit onEdit={onEdit} value={value} />;
  }
  return <Display value={value} />;
}

export default Editable;
