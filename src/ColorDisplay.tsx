import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";

interface ColorDisplayProps {
  rgb: string;
  onClick: () => void;
}

interface StyledColorDisplayProps {
  rgb: string;
}

const StyledColorDisplay = styled.div.attrs<StyledColorDisplayProps>(
  ({ rgb }) => ({
    style: { background: rgb },
  })
)<StyledColorDisplayProps>`
  cursor: pointer;
  padding: 5rem;
  border: 1px solid black;
  text-align: center;
  max-width: 22%;
  /* margin-left: auto;
  margin-right: auto; */
  p + p {
    color: white;
  }
`;

export const ColorDisplay = ({ rgb, onClick }: ColorDisplayProps) => {
  return (
    <StyledColorDisplay rgb={rgb} onClick={onClick}>
      <BlackWhiteText text={rgb} />
    </StyledColorDisplay>
  );
};
