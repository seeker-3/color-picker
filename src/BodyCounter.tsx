import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";
import { ColorCounter } from "./ColorCounter";
import { useRGB, rgbHookToHex } from "./useRGB";

const StyledBodyCounter = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .white {
    color: white;
  }
`;

export const BodyCounter = () => {
  const rgb = useRGB({ red: 4, green: 4, blue: 4 });

  const hex = (document.body.style.backgroundColor = rgbHookToHex(rgb));

  return (
    <StyledBodyCounter>
      <div>
        <BlackWhiteText>adjust background color {hex}</BlackWhiteText>
        <ColorCounter {...rgb} hide />;
      </div>
    </StyledBodyCounter>
  );
};
