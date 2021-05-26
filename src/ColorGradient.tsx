import { FC, useMemo } from "react";
import styled from "styled-components";
import useColorList from "./ColorListContext";
import { ColorSquare } from "./ColorSquare";
import { RGBPropsStrict, rgbToHex } from "./useRGB";

const StyledGradient = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  > * {
    flex-basis: 12.5%;
  }
  min-height: 12rem;
`;

const createGradient = (red: number, green: number, blue: number) => {
  const rgb = {
    red,
    green,
    blue,
  };

  while (rgb.red > 0 && rgb.green > 0 && rgb.blue > 0) {
    --rgb.red;
    --rgb.green;
    --rgb.blue;
  }

  const gradient: string[] = [];

  while (rgb.red < 16 && rgb.green < 16 && rgb.blue < 16) {
    gradient.push(rgbToHex(rgb));
    ++rgb.red;
    ++rgb.green;
    ++rgb.blue;
  }

  return gradient;
};

export const ColorGradient: FC<RGBPropsStrict> = ({ red, green, blue }) => {
  const [, { addColor }] = useColorList();
  const gradient = useMemo(
    () => createGradient(red, green, blue),
    [red, green, blue]
  );

  return (
    <StyledGradient>
      {gradient.map((rgb, key) => (
        <ColorSquare
          key={key}
          rgb={rgb}
          padding="0"
          onClick={() => addColor(rgb)}
        />
      ))}
    </StyledGradient>
  );
};

export {};
