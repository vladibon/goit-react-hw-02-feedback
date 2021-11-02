import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(type => (
    <button
      key={type}
      className={type}
      type='button'
      onClick={() => onLeaveFeedback(type)}
    >
      {type}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
