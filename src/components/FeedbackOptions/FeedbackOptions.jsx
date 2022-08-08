import PropTypes from 'prop-types';
// import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button
        key={button}
        type={button}
        onClick={onLeaveFeedback}
        name={button}
      >
        {button}
      </button>
    );
  });
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}
