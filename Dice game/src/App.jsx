// import styled from "styled-components";
import { useState } from "react";
import StartGame from "./Component/StartGame";
import GamePlay from "./Component/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toogleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toogle={toogleGameplay} />}</>
  );
}

export default App;
