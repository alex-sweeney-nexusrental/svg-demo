import React, { useState } from "react";

export const Rectangle = () => {
  const [svgWidth, setSvgWidth] = useState(100);
  const [svgHeight, setSvgHeight] = useState(100);
  const [rectWidth, setRectWidth] = useState(100);
  const [rectHeight, setRectHeight] = useState(100);
  const [fill, setFill] = useState("azure");
  const [stroke, setStroke] = useState("black");
 
  return (
    <div className="lesson-container">
    <h2>1 - Rectangle</h2>
      <h3>Code</h3>
      <div className="input-container">
        <label htmlFor="number">SVG Width</label>
        <input
          type="number"
          value={svgWidth}
          onChange={(e) => setSvgWidth(e.target.value)}
        ></input>

        <label htmlFor="number">SVG Height</label>
        <input
          type="number"
          value={svgHeight}
          onChange={(e) => setSvgHeight(e.target.value)}
        ></input>

        <label htmlFor="number">Rect Width</label>
        <input
          type="number"
          value={rectWidth}
          onChange={(e) => setRectWidth(e.target.value)}
        ></input>

        <label htmlFor="number">Rect Height</label>
        <input
          type="number"
          value={rectHeight}
          onChange={(e) => setRectHeight(e.target.value)}
        ></input>

        <label htmlFor="number">Fill</label>
        <input
          type="text"
          value={fill}
          onChange={(e) => setFill(e.target.value)}
        />

        <label htmlFor="number">Stroke</label>
        <input
          type="text"
          value={stroke}
          onChange={(e) => setStroke(e.target.value)}
        />
      </div>

      <div className="code-wrapper">
        <code
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {`
  <svg width="${svgWidth}" height="${svgHeight}">
    <rect width="${rectWidth + "%"}" height="${
            rectHeight + "%"
          }" fill="${fill}" stroke="${stroke}" />
  </svg>
          `}
        </code>
      </div>

      <h3>Output</h3>
      <div className="output-container">
        <svg 
          width={svgWidth}
          height={svgHeight}
        >
          <rect
            width={`${rectWidth}%`}
            height={`${rectHeight}%`}
            fill={fill}
            stroke={stroke}
          />
        </svg>
      </div>
    </div>
  )
}