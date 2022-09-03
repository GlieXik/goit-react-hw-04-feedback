import { useState } from "react";
import { Buttons } from "./Buttons/Buttons";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNuetral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalStats = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / totalStats);
  };
  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNuetral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };

  // const totalStats = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  // const stateNames = Object.keys(this.state);

  // const totalStats =
  const options = ["good", "neutral", "bad"];
  return (
    <>
      <Section title="Please leave feedback">
        <Buttons options={options} onLeaveFeedback={onLeaveFeedback}></Buttons>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalStats}
          positivePercentage={percent}
        />
      </Section>
    </>
  );
};
