import styled from "styled-components";
const StyledCounter = styled.div`
  > button {
    margin-top: 0.5rem;
    & + button {
      margin-left: 0.5rem;
    }
  }
`;

export interface CounterProps {
  increment: () => void;
  decrement: () => void;
}

export const Counter = ({ increment, decrement }: CounterProps) => {
  return (
    <StyledCounter>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </StyledCounter>
  );
};
