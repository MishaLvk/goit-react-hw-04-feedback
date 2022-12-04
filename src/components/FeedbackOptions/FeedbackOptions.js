import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackControlsBtn,
  FeedbackControls,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackControls>
    {options.map(btn => (
      <FeedbackControlsBtn
        key={btn}
        type="button"
        onClick={() => onLeaveFeedback(btn)}
      >
        {btn}
      </FeedbackControlsBtn>
    ))}
  </FeedbackControls>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
