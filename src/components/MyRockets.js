import PropTypes from 'prop-types';

const MyRockets = ({
  name,
}) => (
  <ul>
    <li>
      {name}
    </li>
  </ul>
);

MyRockets.propTypes = {
  name: PropTypes.node.isRequired,
};

export default MyRockets;
