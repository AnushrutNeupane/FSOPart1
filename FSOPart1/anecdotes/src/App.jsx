import { useState } from "react";

const MostVoted = ({ votes, anecdotes }) => {
  if (votes.length === 0) {
    return <p>No votes yet</p>;
  }

  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);

  return <p>{anecdotes[mostVotedIndex]}</p>;
};

const GetRandomInt = (max) => {
  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
    "Verbose code does not help nearly as much as it hurts readability.",
  ];
  const totalAnecdotes = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(totalAnecdotes).fill(0));
  const mostVoted = Math.max(...votes);

  console.log(selected);

  const handleClick = () => {
    const max = anecdotes.length;
    const newIndex = GetRandomInt(max);
    setSelected(newIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td> {anecdotes[selected]} </td>
          </tr>
          <tr>
            <td>This has {votes[selected]} votes. </td>
          </tr>
        </tbody>
      </table>
      <Button onClick={handleClick} text="Next Anecdote." />
      <Button onClick={handleVote} text="Vote" />
      <h1>Anecdote with most votes: </h1>
      <MostVoted votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
