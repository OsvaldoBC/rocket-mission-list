import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRocket } from '../redux/rockets/rockets';
import './RocketsContainer.css';

const Rocket = ({
  name, img, description,
}) => (
  <div className="rocket flex">
    <img src={img} alt="rocket" />
    <div className="rocket-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};


const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);
  return (
    <>
      {rockets.map((rocket) => (
       <Rocket
       key={rocket.id}
       id={rocket.id}
       name={rocket.name}
       type={rocket.type}
       img={rocket.image}
       description={rocket.description}
     />
      ))}
    </>
  );
};

export default RocketsContainer;
