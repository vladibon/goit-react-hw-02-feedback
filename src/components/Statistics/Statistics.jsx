import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => (
  <table className={s.statistics}>
    <thead>
      <tr>
        <th>Good</th>
        <th>Neutral</th>
        <th>Bad</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{good}</td>
        <td>{neutral}</td>
        <td>{bad}</td>
      </tr>
    </tbody>
  </table>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export { Statistics };
