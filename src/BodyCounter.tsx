import { useState } from "react";
import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";
import { Counter } from "./Counter";
import { makeRGB, RGB } from "./rgb";

const StyledBodyCounter = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .white {
    color: white;
  }
`;

const bodyBackground: RGB = {
  red: 4,
  green: 4,
  blue: 4,
};

const setBodyBackground = () => {
  const rgb = makeRGB(bodyBackground);
  document.body.style.backgroundColor = rgb;
  return rgb;
};

export const BodyCounter = () => {
  const [rgb, setRGB] = useState(setBodyBackground());

  const increment = () => {
    if (bodyBackground.red === 15) return;
    // @ts-ignore
    ++bodyBackground.red;
    // @ts-ignore
    ++bodyBackground.green;
    // @ts-ignore
    ++bodyBackground.blue;
    setRGB(setBodyBackground());
  };

  const decrement = () => {
    if (bodyBackground.red === 0) return;
    // @ts-ignore
    --bodyBackground.red;
    // @ts-ignore
    --bodyBackground.green;
    // @ts-ignore
    --bodyBackground.blue;
    setRGB(setBodyBackground());
  };

  return (
    <StyledBodyCounter>
      <div>
        <BlackWhiteText>adjust background color {rgb}</BlackWhiteText>
        <Counter increment={increment} decrement={decrement} />;
      </div>
    </StyledBodyCounter>
  );
};
