const JOIN_MISSION = 'bookstore/src/redux/books/books/JOIN_MISSION';
const LEAVE_MISSION = 'bookstore/src/redux/books/books/LEAVE_MISSION';
const MISSION_LIST = 'bookstore/src/redux/books/books/MISSION_LIST';
const API_URL = 'https://api.spacexdata.com/v3/missions';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return state;
    case LEAVE_MISSION:
      return state;
    case MISSION_LIST:
      return action.missionList;
    default:
      return state;
  }
};

const getData = async () => {
  try {
    const result = await fetch(API_URL);
    const data = await result.json();
    return (data);
  } catch (error) {
    return error;
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

export const missionList = () => async (dispatch) => {
  const missionList = await getData();
  dispatch({
    type: MISSION_LIST,
    missionList,
  });
};

export default missionReducer;
