import { FC, useMemo } from "react";
import styled from "styled-components";
import useColorList from "./ColorListContext";
import { ColorSquare } from "./ColorSquare";
import { ColorCounterProps, rgbToHex } from "./useRGB";

const StyledColorCounter = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCounter = styled.div`
  > button {
    margin-top: 0.5rem;
    & + button {
      margin-left: 0.5rem;
    }
  }
`;

interface ColorCounterPropsExtended extends ColorCounterProps {
  hide?: boolean;
}

export const ColorCounter: FC<ColorCounterPropsExtended> = ({
  red: [red, incrementRed, decrementRed] = [],
  green: [green, incrementGreen, decrementGreen] = [],
  blue: [blue, incrementBlue, decrementBlue] = [],
  hide = false,
}) => {
  const [, { addColor }] = useColorList();

  const { rgb, increment, decrement } = useMemo(
    () => ({
      rgb: rgbToHex({ red, green, blue }),
      increment() {
        if (red === 15 || green === 15 || blue === 15) return;
        incrementRed && incrementRed();
        incrementGreen && incrementGreen();
        incrementBlue && incrementBlue();
      },
      decrement() {
        if (red === 0 || green === 0 || blue === 0) return;
        decrementRed && decrementRed();
        decrementGreen && decrementGreen();
        decrementBlue && decrementBlue();
      },
    }),
    [red, green, blue]
  );

  return (
    // <StyledColorCounter>
    <div>
      {hide || <ColorSquare rgb={rgb} onClick={() => addColor(rgb)} />}
      <StyledCounter>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </StyledCounter>
    </div>
    // </StyledColorCounter>
  );
};
