import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

const Rocket = ({
  id, name, img, description, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket flex">
      <img src={img} alt="rocket" />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>
          {' '}
          {reserved && (
            <span className="reserved">Reserved</span>
          )}
          {' '}
          {description}
        </p>
        {!reserved && (
          <button className="rocket-btn-inactive" type="button" onClick={() => dispatch(reserveRocket(id))}>Reserve Rocket</button>
        )}
        {reserved && (
          <button className="rocket-btn-active" type="button" onClick={() => dispatch(cancelRocket(id))}>Cancel Reservation</button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
