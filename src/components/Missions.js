import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionList } from '../redux/missions/missions';
import Mission from './Mission';

function Missions() {
  const listOfMissions = useSelector((state) => state.missions);
  const send = useDispatch();
  console.log(listOfMissions);

  useEffect(() => {
    send(missionList());
  }, [send]);
  return (
    <div className="missions-container">
      {
        listOfMissions.map((item) => (
          <Mission
            mission_id={item.mission_id}
            key={item.mission_id}
            mission_name={item.mission_name}
            description={item.description}
          />
        ))
      }
    </div>
  );
}

export default Missions;
