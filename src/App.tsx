import React, { useState } from "react";
import { Rectangle } from "./components/Rectangle";
import { Circle } from "./components/Circle";
import { Ellipse } from "./components/Ellipse";
import { Triangle } from "./components/Triangle";
import "./App.css";

function App() {
  return (
    <>
      <h1>SVG Class 🎨</h1>
      <Rectangle />
      <Circle />
      <Ellipse />
      <Triangle />
    </>
  );
}

export default App;
