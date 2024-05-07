import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give a feedback</h2>
      <Button text='good' good={good} setGood={setGood} />
      <Button text='neutral' neutral={neutral} setNeutral={setNeutral} />
      <Button text='bad' bad={bad} setBad={setBad} />

      <h2>Statistics</h2>
      {good || bad || neutral ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const Button = ({ text, good, bad, neutral, setGood, setBad, setNeutral }) => {
  const handleClick = () => {
    if (text === 'good') {
      setGood(good + 1);
    }
    if (text === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (text === 'bad') {
      setBad(bad + 1);
    }
  };
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, bad, neutral }) => {
  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={good + bad + neutral} />
      <StatisticLine
        text='average'
        value={(good - bad) / (good + bad + neutral)}
      />
      <StatisticLine
        text='positive'
        value={(good / (good + bad + neutral)) * 100}
      />
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>
          {' '}
          {value} {text === 'positive' ? '%' : ''}
        </td>
      </tr>
    </tbody>
  );
};

export default App;
