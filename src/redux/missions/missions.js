const JOIN_MISSION = 'bookstore/src/redux/books/books/JOIN_MISSION';
const LEAVE_MISSION = 'bookstore/src/redux/books/books/LEAVE_MISSION';
const MISSION_LIST = 'bookstore/src/redux/books/books/MISSION_LIST';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return state;
    case LEAVE_MISSION:
      return state;
    case MISSION_LIST:
      return state;
    default:
      return state;
  }
};

export const joinMission = (id) => (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    id,
  });
};

export const leaveMission = (id) => (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    id,
  });
};

export default missionReducer;
