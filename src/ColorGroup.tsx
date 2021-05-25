import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";
import { ColorCounter } from "./ColorCounter";
import { RGB, useRGB } from "./rgb";

const StyledColorGroup = styled.div`
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  gap: 2rem;

  justify-content: center;
`;

export const ColorGroup = (props: RGB) => {
  const bind = useRGB(props);

  return (
    <div>
      <BlackWhiteText text="click to save color" />
      <StyledColorGroup>
        <div />
        <ColorCounter {...bind.all} />
        <div />
        <ColorCounter {...bind.rg} />
        <ColorCounter {...bind.rb} />
        <ColorCounter {...bind.gb} />
        <ColorCounter {...bind.red} />
        <ColorCounter {...bind.green} />
        <ColorCounter {...bind.blue} />
      </StyledColorGroup>
    </div>
  );
};
