import React from "react";

function TestingOne({ toTestingTwo }) {
  return (
    <div>
      <p>TestingOne</p>
      <button onClick={toTestingTwo}>next</button>
    </div>
  );
}

export default TestingOne;
