import { useState, useMemo } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import { Wrapper } from './feedback.styled';
import './Feedback.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickIncrement = lable => {
    switch (lable) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const CountTotalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const CountPositiveFeedbackPercentage = useMemo(() => {
    return parseInt((good / CountTotalFeedback) * 100);
  }, [good, CountTotalFeedback]);

  return (
    <Wrapper title="Feedback">
      <h1>Please leave feedback</h1>

      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={clickIncrement}
      ></FeedbackOptions>
      <h2>Statistics</h2>
      {CountTotalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={CountTotalFeedback}
          positivePercentage={CountPositiveFeedbackPercentage}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Wrapper>
  );
}

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// clickIncrement = lable => {
//   const { btn } = lable;
//   this.setState(prevState => {
//     return {
//       [btn]: prevState[btn] + 1,
//     };
//   });
// };

//   CountTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   CountPositiveFeedbackPercentage = () => {
//     return parseInt((this.state.good / this.CountTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <section title="Feedback" className="Feedback_container">
//         <h1>Please leave feedback</h1>

//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.clickIncrement}
//         ></FeedbackOptions>
//         <h2>Statistics</h2>
//         {this.CountTotalFeedback() ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.CountTotalFeedback()}
//             positivePercentage={this.CountPositiveFeedbackPercentage()}
//           ></Statistics>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </section>
//     );
//   }
// }

// export default Feedback;
