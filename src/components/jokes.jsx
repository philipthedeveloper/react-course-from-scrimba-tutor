import React, {Component} from 'react'

function Joke({question, punchline}) {
  return (
    <React.Fragment>
      <h2>{question ? ('Question: ' + question) : ''}</h2>
      <h4>Answer: {punchline}</h4>
    </React.Fragment>
  );
}

export default Joke;