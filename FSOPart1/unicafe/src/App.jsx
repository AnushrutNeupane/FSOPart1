import { useState } from 'react';

const Stats = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No stats to show!</p>;
  }

  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positivePercentage = (good / total) * 100;

  return (
    <>
      <h2>Statistics:</h2>
      <tr> Good: {good} </tr>
      <tr> Neutral: {neutral} </tr>
      <tr> Bad: {bad} </tr>
      <tr> All: {total} </tr>
      <tr> Average: {average} </tr>
      <tr> Positive: {positivePercentage}% </tr>
    </>
  );
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback:</h1>
      <h3>Place a vote to start the tally!</h3>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
