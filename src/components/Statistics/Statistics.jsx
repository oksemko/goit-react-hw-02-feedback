import PropTypes from 'prop-types';

import { Span } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Span>Good: {good}</Span>
      <p></p>
      <Span>Neutral: {neutral}</Span>
      <p></p>
      <Span>Bad: {bad}</Span>
      <p></p>
      <Span>Total: {total}</Span>
      <p></p>
      <Span>Positive Feedback: {positivePercentage} %</Span>
      <p></p>
    </div>
  );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
