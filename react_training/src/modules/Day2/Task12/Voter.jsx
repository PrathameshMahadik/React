/* 12.Create a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option. */
import React, { useReducer } from "react";

const votesReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
};

const VotingApp = () => {
  const initialState = {
    option1: 0,
    option2: 0,
    option3: 0,
  };

  const [votes, dispatch] = useReducer(votesReducer, initialState);
  const handleVote = (option) => {
    dispatch({ type: "VOTE", option });
  };
  return (
    <div>
      <h1>Simple Voting Application</h1>
      <div>
        <button onClick={() => handleVote("option1")}>Option 1</button>
        <span>Vote Count: {votes.option1}</span>
      </div>
      <div>
        <button onClick={() => handleVote("option2")}>Option 2</button>
        <span>Vote Count: {votes.option2}</span>
      </div>
      <div>
        <button onClick={() => handleVote("option3")}>Option 3</button>
        <span>Vote Count: {votes.option3}</span>
      </div>
    </div>
  );
};

export default VotingApp;
