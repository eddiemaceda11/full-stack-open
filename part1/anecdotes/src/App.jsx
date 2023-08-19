import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Set state for points/votes
  const [points, setPoints] = useState({});
  // Set state for array selection
  const [selected, setSelected] = useState(0);

  // Copy points/vote object
  const copy = { ...points };

  // When user clicks vote
  const vote = () => {
    // if vote doesnt exist in obj, init vote with
    // value of 1 and update state
    if (points[selected] === undefined) {
      copy[selected] = 1;
      setPoints(copy);
    }
    // if vote does exist in obj, increment by 1
    // and update state
    else {
      copy[selected]++;
      setPoints(copy);
    }
  };

  // When user clicks next
  const next = () => {
    // generate random num and update state
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  // Loop through obj and find property with highest value
  let highestVote = Object.keys(points).length === 0 ? 0 : Object.keys(points).reduce((a, b) => (points[a] > points[b] ? a : b));
  console.log(highestVote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br /> has {points[selected] === undefined ? 0 : points[selected]} votes
      </p>
      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[highestVote]}</p>
      <p>{points[highestVote]}</p>
    </div>
  );
};

export default App;
