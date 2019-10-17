import React from 'react';
import './Editable.scss';

const Edit = ({ className, value, onEdit = () => {} }) => {
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
      autoFocus={true}
      onKeyPress={onKeyPress}
      onBlur={finishEdit}
      defaultValue={value}
    />
  );
};

const Display = ({ value, onClick = () => {} }) => (
  <span onClick={onClick}>{value}</span>
);

function Editable({
  editing,
  value,
  onDisplayClick = () => {},
  onEdit = () => {}
}) {
  if (editing) {
    return <Edit className="editable" onEdit={onEdit} value={value} />;
  }
  return (
    <Display className="editable" onClick={onDisplayClick} value={value} />
  );
}

export default Editable;
