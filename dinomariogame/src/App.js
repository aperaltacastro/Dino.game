import "./styles.css";
import startorEnd from "./button.js";
import React, { useState } from "react";

export default function App() {
  let [obstaclePosition, setObstaclePosition] = useState(0);
  let [Score, setCurrentScore] = useState(0);
  let [dinoPosition, setCurrentDinoPosition] = useState(0);
  let [gamePlayingState, setCurrentGamePlayingState] = useState(null);
  let [gameEndingState, setCurrentGameEndingState] = useState(null);
  let [collisionDetection, setCurrentCollisionDetection] = useState(true);
  let [
    obstacleAppearanceInterval,
    setCurrentObstacleAppearanceInterval
  ] = useState(45);
  const canvas = document.getElementById("container");
  const ctx = canvas.getContext("2d");
  
  function draw(){
    
  }

  return (
    <div className="App">
      <canvas></canvas>

      <div id="container"></div>

      <startorEnd />
    </div>
  );
}



