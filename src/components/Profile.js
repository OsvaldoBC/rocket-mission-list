import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAct } from '../redux/missions/missions';
import ProfileMission from './ProfileMission';
import './Profile.css';

function Profile() {
  const listOfMissions = useSelector((state) => state.missions);
  const send = useDispatch();

  useEffect(() => {
    send(filterAct());
  }, [send]);
  return (
    <div className="main-profile-container">
      <div className="main-missions-container">
        <h2 className="missions-container-title">My Missions</h2>
        <div>
          {
        listOfMissions.map((item) => (
          <ProfileMission
            mission_id={item.mission_id}
            key={item.mission_id}
            mission_name={item.mission_name}
            description={item.description}
            reserved={item.reserved}
          />
        ))
      }
        </div>
      </div>
      <div>
        <h2>My Rockets</h2>
      </div>
    </div>
  );
}

export default Profile;