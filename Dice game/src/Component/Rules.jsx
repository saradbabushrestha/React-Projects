import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesCOntainers>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice{" "}
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </RulesCOntainers>
  );
};

export default Rules;
const RulesCOntainers = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  gap: 24px;
  margin: 0 auto;
  max-width: 800px;
  direction: flex;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    width: 280px;
    height: 36px;
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    text-align: left;
  }
  .text {
    margin-top: 24px;
  }
`;
