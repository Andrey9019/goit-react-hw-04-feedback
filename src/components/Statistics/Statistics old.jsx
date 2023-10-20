import React from "react";
import css from "components/Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedback = ((good / countTotalFeedback) * 100).toFixed(0);

  return (
    <div className={css.statistics}>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {countTotalFeedback}</p>
      <p className={css.item}>Positive feedback: {countPositiveFeedback}%</p>
    </div>
  );
};

export default Statistics;
