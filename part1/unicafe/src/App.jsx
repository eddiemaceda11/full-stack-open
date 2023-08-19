import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticsLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const goodCount = props.value[0];
  const neutralCount = props.value[1];
  const badCount = props.value[2];

  // If no feedback has been collected
  if (goodCount === 0 && neutralCount === 0 && badCount === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={goodCount} />
      <StatisticsLine text="neutral" value={neutralCount} />
      <StatisticsLine text="bad" value={badCount} />
      <StatisticsLine text="total" value={goodCount + badCount + neutralCount} />
      <StatisticsLine text="average" value={(goodCount - badCount / 3) * 0.1} />
      <StatisticsLine text="positive" value={goodCount / goodCount + badCount + neutralCount} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics value={[good, neutral, bad]} />
    </div>
  );
};

export default App;
