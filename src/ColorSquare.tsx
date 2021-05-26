import { FC } from "react";
import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";

interface StyledColorSquareProps {
  background: string;
  padding: string;
}

interface ColorSquareProps {
  rgb: string;
  onClick: () => void;
  padding?: string;
}

const StyledColorSquare = styled.div.attrs<StyledColorSquareProps>(
  ({ background, padding }) => ({
    style: {
      background,
      padding,
    },
  })
)<StyledColorSquareProps>`
  cursor: pointer;
  padding: 5rem;
  /* border: 1px solid black; */
  text-align: center;
  max-width: 22%;
  /* margin-left: auto;
  margin-right: auto; */
  display: grid;
  align-content: center;

  p + p {
    color: white;
  }
`;

export const ColorSquare: FC<ColorSquareProps> = ({
  rgb,
  onClick,
  padding = "5rem",
}) => {
  return (
    <StyledColorSquare background={rgb} padding={padding} onClick={onClick}>
      <BlackWhiteText text={rgb} />
    </StyledColorSquare>
  );
};
