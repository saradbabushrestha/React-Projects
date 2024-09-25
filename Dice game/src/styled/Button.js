import styled from "styled-components";
export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000000;
  color: white;
  width: 220px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  transition: 0.6s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 0.5px solid black;
    transition: 0.4s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 0.5px solid black;
  }
`;
