import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackStatistics } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <FeedbackStatistics className="Feedback_statistics">
    <span className="Statistic_value">Good: {good}</span>
    <span className="Statistic_value">Neutral: {neutral}</span>
    <span className="Statistic_value">Bad: {bad}</span>
    <span className="Statistic_value">Total: {total}</span>
    <span className="Statistic_value">
      Positive feedback: {positivePercentage}%
    </span>
  </FeedbackStatistics>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
