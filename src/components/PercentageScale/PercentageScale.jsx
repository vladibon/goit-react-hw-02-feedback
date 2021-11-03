import PropTypes from 'prop-types';
import s from './PercentageScale.module.css';

const PercentageScale = ({ options, total, countFeedbackPercentage }) => (
  <div>
    <h3>Summary</h3>
    <div className={s.scale}>
      {options.map(type => {
        const percentage = countFeedbackPercentage(type);

        return (
          <span
            key={type}
            className={s[type]}
            style={{ width: percentage + '%' }}
          >
            {percentage > 6 && percentage + '%'}
          </span>
        );
      })}
    </div>

    <p className={s.total}>
      Total <span>{total}</span>
    </p>
  </div>
);

PercentageScale.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  countFeedbackPercentage: PropTypes.func.isRequired,
};

export { PercentageScale };
