import React from 'react';

function Mission(props) {
  const missionData = props;
  return (
    <div className="mission-container line">
      <h4 className="name-case mname-case">{missionData.mission_name}</h4>
      <p className="desc-case mdesc-case">{missionData.description}</p>
      <h4 className="stat-case mstat-case">NOT A MEMBER</h4>
      <h4 className="btn-case mbtn-case"><button type="button">JOIN MISSION</button></h4>
    </div>
  );
}

export default Mission;
