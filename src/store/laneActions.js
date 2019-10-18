import uuid from 'uuid';

export const ATTACH_TO_LANE = 'ATTACH_TO_LANE';
export const CREATE_LANE = 'CREATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const DETACH_FROM_LANE = 'DETACH_FROM_LANE';
export const START_EDIT_LANE = 'START_EDIT_LANE';
export const FINISH_EDIT_LANE = 'FINISH_EDIT_LANE';

export const attachToLane = (laneId, noteId) => ({
  type: ATTACH_TO_LANE,
  id: laneId,
  noteId: noteId
});

export const createLane = title => ({
  type: CREATE_LANE,
  id: uuid.v4(),
  title: title
});

export const deleteLane = id => ({
  type: DELETE_LANE,
  id: id
});

export const detachFromLane = (laneId, noteId) => ({
  type: DETACH_FROM_LANE,
  id: laneId,
  noteId: noteId
});

export const startEditLane = id => ({
  type: START_EDIT_LANE,
  id: id
});

export const finishEditLane = (id, title) => ({
  type: FINISH_EDIT_LANE,
  id: id,
  title: title
});

export default {
  attachToLane,
  createLane,
  deleteLane,
  detachFromLane,
  startEditLane,
  finishEditLane
};
