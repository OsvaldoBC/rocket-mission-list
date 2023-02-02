import React from 'react';

function ProfileMission(props) {
  const missionData = props;
  return (
    <div className="mission-profile-list-container">
      <h3 className="mission-intro">
        Estas unido a la mision:
        <span className="mission-title">{missionData.mission_name}</span>
      </h3>
    </div>
  );
}

export default ProfileMission;
