import styled from 'styled-components';

export const FeedbackControlsBtn = styled.button`
  text-transform: capitalize;
  font-style: 18px;
  font-weight: 600;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  :active {
    background-color: rgba(45, 131, 252, 0.873);
  }
`;

export const FeedbackControls = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
