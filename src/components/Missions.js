import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionList } from '../redux/missions/missions';
import Mission from './Mission';
import './Missions.css';

function Missions() {
  const listOfMissions = useSelector((state) => state.missions);
  const send = useDispatch();

  useEffect(() => {
    send(missionList());
  }, [send]);
  return (
    <div className="missions-container">
      <div className="line">
        <h3 className="mname-case">Mission</h3>
        <h3 className="mdesc-case">Description</h3>
        <h3 className="mstat-case">Status</h3>
        <h3 className="mbtn-case">Press</h3>
      </div>
      {
        listOfMissions.map((item) => (
          <Mission
            mission_id={item.mission_id}
            key={item.mission_id}
            mission_name={item.mission_name}
            description={item.description}
            reserved={item.reserved}
          />
        ))
      }
    </div>
  );
}

export default Missions;
