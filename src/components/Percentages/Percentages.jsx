import PropTypes from 'prop-types';
import s from './Percentages.module.css';

const Percentages = ({ percentages }) => (
  <div>
    <h3>Percentages</h3>

    <div className={s.scale}>
      {percentages.map(({ type, percentage }) => (
        <span
          key={type}
          className={s[type]}
          style={{ width: percentage + '%' }}
        >
          {percentage > 6 && percentage + '%'}
        </span>
      ))}
    </div>
  </div>
);

Percentages.propTypes = {
  percentages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export { Percentages };
