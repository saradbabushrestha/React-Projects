import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({ toogle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dicess.png" alt="dices front picture" />
      </div>
      <div className="Content">
        <h1>Dice Game</h1>
        <Button onClick={toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .Content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;
