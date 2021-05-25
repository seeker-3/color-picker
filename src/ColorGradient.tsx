import { useMemo } from "react";

import { makeRGB } from "./rgb";
import styled from "styled-components";

const colors: string[][] = [];

for (let red = 0; red < 16; red += 4) {
  colors.push([]);
  for (let green = 0; green < 16; green += 4) {
    for (let blue = 0; blue < 16; blue += 4) {
      colors[red >> 2].push(makeRGB({ red, green, blue }));
    }
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  .box {
    display: flex;
    flex-wrap: wrap;
    width: calc(50% - 0.5rem);
    padding: 0.25rem;
  }

  .color {
    width: 25%;
    margin: 0;
    text-align: center;
    padding: 4rem 0;
  }
`;

export const ColorGradient = () => (
  <StyledDiv>
    {useMemo(
      () =>
        colors.map((boxes, i) => (
          <div key={i} className="box">
            {boxes.map((color) => (
              <div className="color" key={color} style={{ background: color }}>
                {color}
              </div>
            ))}
          </div>
        )),

      []
    )}
  </StyledDiv>
);
