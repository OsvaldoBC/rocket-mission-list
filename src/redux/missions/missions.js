const JOIN_MISSION = 'bookstore/src/redux/books/books/JOIN_MISSION';
const LEAVE_MISSION = 'bookstore/src/redux/books/books/LEAVE_MISSION';
const MISSION_LIST = 'bookstore/src/redux/books/books/MISSION_LIST';
const FILTER = 'bookstore/src/redux/books/books/FILTER';
const API_URL = 'https://api.spacexdata.com/v3/missions';

const JoinMission = (state, payload) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== payload) return mission;
    return { ...mission, reserved: true };
  });
  return newState;
};

const LeaveMission = (state, payload) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== payload) return mission;
    return { ...mission, reserved: false };
  });
  return newState;
};

const filter = (state) => {
  const newState = state.filter((mission) => mission.reserved === true);
  return newState;
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return JoinMission(state, action.payload);
    case LEAVE_MISSION:
      return LeaveMission(state, action.payload);
    case MISSION_LIST:
      return action.missionList;
    case FILTER:
      return filter(state);
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

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const missionList = () => async (dispatch) => {
  const missionList = await getData();
  dispatch({
    type: MISSION_LIST,
    missionList,
  });
};

export const filterAct = (payload) => ({
  type: FILTER,
  payload,
});

export default missionReducer;
