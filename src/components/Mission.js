import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';
import './Mission.css';

function Mission(props) {
  const missionData = props;
  const dispatch = useDispatch();
  const join = (id) => {
    dispatch(joinMission(id));
  };
  const leave = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <div className="mission-container line">
      <h4 className="name-case mname-case">{missionData.mission_name}</h4>
      <p className="desc-case mdesc-case">{missionData.description}</p>
      {missionData.reserved
      && <div className="stat-case mstat-case"><h4 className="text-active">ACTIVE MEMBER</h4></div>}
      {!missionData.reserved
      && <div className="stat-case mstat-case"><h4 className="text">NOT A MEMBER</h4></div>}
      {missionData.reserved
      && <h4 className="btn-case mbtn-case"><button className="btn-active" type="button" onClick={() => leave(missionData.mission_id)}>LEAVE MISSION</button></h4>}
      {!missionData.reserved
      && <h4 className="btn-case mbtn-case"><button className="btn-inactive" type="button" onClick={() => join(missionData.mission_id)}>JOIN MISSION</button></h4>}
    </div>
  );
}

export default Mission;
