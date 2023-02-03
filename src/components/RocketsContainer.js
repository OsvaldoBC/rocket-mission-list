import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket } from '../redux/rockets/rockets';
import Rocket from './Rocket';
import './RocketsContainer.css';

const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocket());
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="rocket-item-container">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          type={rocket.type}
          img={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default RocketsContainer;
