import PropTypes from 'prop-types';

const MyRockets = ({
  name,
}) => (
  <ul className="rockets-items">
    <li className="rocket-intro">
      You reserved rocket:
      <span className="rocket-title">{name}</span>
    </li>
  </ul>
);

MyRockets.propTypes = {
  name: PropTypes.node.isRequired,
};

export default MyRockets;
