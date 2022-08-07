import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <div>
      <span>Good: {good}</span>
      <p></p>
      <span>Neutral: {neutral}</span>
      <p></p>
      <span>Bad: {bad}</span>
      <p></p>
      <span>Total: {total}</span>
      <p></p>
      <span>Positive Feedback: {positivePersentage} %</span>
      <p></p>
    </div>
  );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
}
