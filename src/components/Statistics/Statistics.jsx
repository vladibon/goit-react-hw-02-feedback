import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, children }) => (
  <>
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

    {children}

    <p className={s.total}>
      Total <span>{total}</span>
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export { Statistics };
