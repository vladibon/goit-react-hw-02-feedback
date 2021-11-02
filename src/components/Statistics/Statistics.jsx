import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Good</th>
          <th>Neutral</th>
          <th>Bad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{good}</td>
          <td>{neutral}</td>
          <td>{bad}</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>

    <h3>Positive feedback:</h3>
    <div>
      <span>{positivePercentage}%</span>
    </div>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
