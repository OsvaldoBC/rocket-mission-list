import React from 'react';

function Mission(props) {
  const missionData = props;
  return (
    <div className="book-container">
      <h4>{missionData.mission_id}</h4>
      <h4>{missionData.mission_name}</h4>
      <p>{missionData.description}</p>
    </div>
  );
}

export default Mission;
