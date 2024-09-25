import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={() => generateRandomNumber(1, 7)}>
        <img
          src={`/images/Dice/dice_${currentDice}.png`}
          onClick={roleDice}
          alt="Value 1"
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 48px;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
