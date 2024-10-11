import { useState } from "react"

export const Wave = () => {
  const [d, setD] = useState(`
M 0 50,
q 25 50 50 0,
q 25 -50 50 0,
z
`);

  return (
    <div className="lesson-container">
      <h2>5 - Wave</h2>

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
          <path d={d} stroke="red" strokeWidth={5} fill="none"/>
        </svg>
      </div>
    </div>
  )
}