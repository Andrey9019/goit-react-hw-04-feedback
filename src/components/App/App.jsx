import React, { useState } from "react";
import Section from "components/Section/Section";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOption";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";

export const App = () => {
  const [option, setOption] =
    useState({ good: 0, neutral: 0, bad: 0 })

 const countTotalFeedback = () => {
      const values = Object.values(option);
    return values.reduce((acc, item) => (acc += item), 0);
  }

  const countPositiveFeedback = () => {
      const { good } = option;
    return ((good / countTotalFeedback()) * 100).toFixed(0);

  }

 const handleFeedback = option => {
    setOption(prevState => ({
   ...prevState, [option]: prevState[option] + 1,
      
    }));
  };

    const totalFeedback = countTotalFeedback();

    return (
      <React.Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(option)} 
            handleFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics:">
          {totalFeedback > 0 ? (
            <Statistics
              state={option}
              countTotalFeedback={countTotalFeedback()}
              countPositiveFeedback={countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </React.Fragment>
    )
  
}