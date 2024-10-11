import { useEffect, useState } from "react";
 
export const Triangle = () => {
  const [d, setD] = useState(`M 25 67.5,
l 25 -25,
z
          `);

  return (
    <div className="lesson-container">
      <h2>4 - Triangle</h2>

      <h3>Code</h3>
      <div className="input-container">
        <label htmlFor="text-area">d:</label>
        <textarea
          id="text-area"
          value={d}
          onChange={(e) => setD(e.target.value)}
        ></textarea>
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
    <path d={${d.trim().replaceAll("\n", '')}} stroke="red" strokeWidth={5} fill="none"/>
  </svg>
          `}
        </code>
      </div>

      <h3>Output</h3>
      <div className="output-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <rect width="100%" height="100%" fill="azure" stroke="black"/>
          <path d={`
            M 25 67.5,
            l 25 -25,
            l 25 25,
            z
          `} stroke="red" strokeWidth={5} fill="none"/>
        </svg>
      </div>
    </div>
  )
}