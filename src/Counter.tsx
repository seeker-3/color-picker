import { Dispatch, SetStateAction, useState } from "react";
import { ColorDisplay } from "./ColorDisplay";
import styled from "styled-components";

const StyledCounter = styled.div`
  margin: 1rem;
  text-align: center;
`;

type bind = { increment: () => void; decrement: () => void };

export const useCounter = (): [
  number,
  bind,
  Dispatch<SetStateAction<number>>
] => {
  const [count, setCount] = useState(8);
  const increment = () => {
    if (count < 15) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return [count, { increment, decrement }, setCount];
};

export const Counter = ({
  rgb,
  increment,
  decrement,
}: {
  rgb: string;
  increment: () => void;
  decrement: () => void;
}) => (
  <StyledCounter>
    <ColorDisplay rgb={rgb} />
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </StyledCounter>
);
