import React from 'react';

function ProfileMission(props) {
  const missionData = props;
  return (
    <div className="mission-profile-list-container">
      <h3>
        Estas unido a la mision:
        <span>{missionData.mission_name}</span>
      </h3>
    </div>
  );
}

export default ProfileMission;
