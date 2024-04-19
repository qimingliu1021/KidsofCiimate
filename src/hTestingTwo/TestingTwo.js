import React from "react";

function TestingTwo({ toTestingThree }) {
  return (
    <div>
      <p>TestingTwo</p>
      <button onClick={toTestingThree}>next</button>
    </div>
  );
}

export default TestingTwo;
