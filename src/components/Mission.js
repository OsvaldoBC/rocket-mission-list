import React from 'react';
import './Mission.css';

function Mission(props) {
  const missionData = props;
  return (
    <div className="mission-container">
      <h4 className="name-case">{missionData.mission_name}</h4>
      <p className="desc-case">{missionData.description}</p>
      <h4 className="stat-case">NOT A MEMBER</h4>
      <button className="btn-case" type="button">JOIN MISSION</button>
    </div>
  );
}

export default Mission;
