import React, { useState } from "react";

export const Circle = () => {
  const [cx, setCx] = useState(25);
  const [cy, setCy] = useState(25);
  const [r, setR] = useState(20);

  return (
    <div className="lesson-container">
    <h2>2 - Circle</h2>
      <h3>Code</h3>
      <div className="input-container">
        <label htmlFor="number">Cx</label>
        <input
          type="number"
          value={cx}
          onChange={(e) => setCx(e.target.value)}
        ></input>

        <label htmlFor="number">Cy</label>
        <input
          type="number"
          value={cy}
          onChange={(e) => setCy(e.target.value)}
        ></input>

        <label htmlFor="number">R</label>
        <input
          type="number"
          value={r}
          onChange={(e) => setR(e.target.value)}
        ></input>
      </div>
      <div className="code-wrapper">
        <code
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {`
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <rect width="100%" height="100%" fill="azure" stroke="black"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke="red" fill="transparent" stroke-width="5"/>
  </svg>
          `}
        </code>
      </div>

      <h3>Output</h3>
      <div className="output-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <rect width="100%" height="100%" fill="azure" stroke="black"/>
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="red"
            fill="transparent"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>
  )
}