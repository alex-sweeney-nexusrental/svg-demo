import { useState } from "react"

export const Ellipse = () => {
  const [cx, setCx] = useState(75);
  const [cy, setCy] = useState(75);
  const [rx, setRx] = useState(20);
  const [ry, setRy] = useState(5);

  return (
    <div className="lesson-container">
    <h2>3 - Ellipse</h2>
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

      <label htmlFor="number">Rx</label>
      <input
        type="number"
        value={rx}
        onChange={(e) => setRx(e.target.value)}
      ></input>

      <label htmlFor="number">Ry</label>
      <input
        type="number"
        value={ry}
        onChange={(e) => setRy(e.target.value)}
      ></input>
    </div>
    <div className="code-wrapper">
      <code>
        {`
  <svg width="100" height="100">
    <rect width="100%" height="100%" fill="azure" stroke="black"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" stroke="red" strokeWidth={5} fill="none"/>
  </svg>
        `}
      </code>
    </div>

    <h3>Output</h3>
      <div className="output-container">
        <svg width="100" height="100">
          <rect width="100%" height="100%" fill="azure" stroke="black"/>
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} stroke="red" strokeWidth={5} fill="none"/>
        </svg>
      </div>
    </div>
  )
}