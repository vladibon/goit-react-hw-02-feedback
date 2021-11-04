import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => (
  <div className={s.controls}>
    {options.map(type => (
      <button
        key={type}
        className={s[type]}
        type='button'
        onClick={() => handleFeedback(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
