import { FC } from "react";
import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";
import { ColorCounter } from "./ColorCounter";
import { useRGB, RGBProps, rgbHookToRGB } from "./useRGB";
import { ColorGradient } from "./ColorGradient";

const StyledColorGroup = styled.div`
  display: flex;
  /* grid-template: repeat(2, 1fr) / repeat(3, auto); */
  margin-top: 2rem;

  justify-content: space-between;
`;

export const ColorGroup: FC<RGBProps> = (props) => {
  const { red, green, blue } = useRGB(props);

  return (
    <div>
      <BlackWhiteText text="click to save color" />
      <ColorGradient {...rgbHookToRGB({ red, green, blue })} />
      <StyledColorGroup>
        {/* <ColorCounter red={red} green={green} blue={blue} /> */}

        <ColorCounter red={red} green={green} />
        <ColorCounter red={red} blue={blue} />
        <ColorCounter green={green} blue={blue} />
      </StyledColorGroup>
      <StyledColorGroup>
        <ColorCounter red={red} />
        <ColorCounter green={green} />
        <ColorCounter blue={blue} />
      </StyledColorGroup>
    </div>
  );
};

// export const useColorGroup = ({
//   red: redInit = 8,
//   green: greenInit = 8,
//   blue: blueInit = 8,
// }: RGBProps) => {
//   const red = useCounter(redInit);
//   const green = useCounter(greenInit);
//   const blue = useCounter(blueInit);

//   return useMemo(() => {
//     return {
//       all: makeRGB({ red, green, blue }),
//       rg: makeRGB({ red, green }),
//       rb: makeRGB({ red, blue }),
//       gb: makeRGB({ green, blue }),
//       red: makeRGB({ red }),
//       green: makeRGB({ green }),
//       blue: makeRGB({ blue }),
//     };
//   }, [red[0], green[0], blue[0]]);
// };

// export const useColorGroup = ({
//   red: redInit = 8,
//   green: greenInit = 8,
//   blue: blueInit = 8,
// }: RGB) => {
//   const [red, incrementRed, decrementRed] = useCounter(redInit);
//   const [green, incrementGreen, decrementGreen] = useCounter(greenInit);
//   const [blue, incrementBlue, decrementBlue] = useCounter(blueInit);

//   return useMemo(() => {
//     const all = {
//       rgb: makeRGB({ red, green, blue }),
//       increment() {
//         if (red < 15 && green < 15 && blue < 15) {
//           incrementRed();
//           incrementGreen();
//           incrementBlue();
//         }
//       },
//       decrement() {
//         if (red > 0 && green > 0 && blue > 0) {
//           decrementRed();
//           decrementGreen();
//           decrementBlue();
//         }
//       },
//     };

//     const rg = {
//       rgb: makeRGB({ red, green }),
//       increment() {
//         if (red < 15 && green < 15) {
//           incrementRed();
//           incrementGreen();
//         }
//       },
//       decrement() {
//         if (red > 0 && green > 0) {
//           decrementRed();
//           decrementGreen();
//         }
//       },
//     };

//     const rb = {
//       rgb: makeRGB({ red, blue }),
//       increment() {
//         if (red < 15 && blue < 15) {
//           incrementRed();
//           incrementBlue();
//         }
//       },
//       decrement() {
//         if (red > 0 && blue > 0) {
//           decrementRed();
//           decrementBlue();
//         }
//       },
//     };

//     const gb = {
//       rgb: makeRGB({ green, blue }),
//       increment() {
//         if (green < 15 && blue < 15) {
//           incrementGreen();
//           incrementBlue();
//         }
//       },
//       decrement() {
//         if (green > 0 && blue > 0) {
//           decrementGreen();
//           decrementBlue();
//         }
//       },
//     };

//     const redProps = {
//       rgb: makeRGB({ red }),
//       increment: incrementRed,
//       decrement: decrementRed,
//     };
//     const greenProps = {
//       rgb: makeRGB({ green }),
//       increment: incrementGreen,
//       decrement: decrementGreen,
//     };
//     const blueProps = {
//       rgb: makeRGB({ blue }),
//       increment: incrementBlue,
//       decrement: decrementBlue,
//     };

//     return {
//       all,
//       rg,
//       rb,
//       gb,
//       red: redProps,
//       green: greenProps,
//       blue: blueProps,
//     };
//     return {
//       all: new RGB({ red, green, blue }),
//       rg: new RGB({ red, green }),
//       rb: new RGB({ red, blue }),
//       gb: new RGB({ green, blue }),
//       red: new RGB({ red }),
//       green: new RGB({ green }),
//       blue: new RGB({ blue }),
//     };
//   }, [red, green, blue]);
// };
