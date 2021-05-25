import { useMemo } from "react";
import { useColorCounter } from "./ColorCounter";

export type RGB = {
  red?: number;
  green?: number;
  blue?: number;
};

export const makeRGB = ({ red = 0, green = 0, blue = 0 }: RGB) =>
  "#" + red.toString(16) + green.toString(16) + blue.toString(16);

export const useRGB = ({
  red: redInit = 8,
  green: greenInit = 8,
  blue: blueInit = 8,
}: RGB) => {
  const [red, incrementRed, decrementRed] = useColorCounter(redInit);
  const [green, incrementGreen, decrementGreen] = useColorCounter(greenInit);
  const [blue, incrementBlue, decrementBlue] = useColorCounter(blueInit);

  return useMemo(() => {
    const all = {
      rgb: makeRGB({ red, green, blue }),
      increment() {
        if (red < 15 && green < 15 && blue < 15) {
          incrementRed();
          incrementGreen();
          incrementBlue();
        }
      },
      decrement() {
        if (red > 0 && green > 0 && blue > 0) {
          decrementRed();
          decrementGreen();
          decrementBlue();
        }
      },
    };

    const rg = {
      rgb: makeRGB({ red, green }),
      increment() {
        if (red < 15 && green < 15) {
          incrementRed();
          incrementGreen();
        }
      },
      decrement() {
        if (red > 0 && green > 0) {
          decrementRed();
          decrementGreen();
        }
      },
    };

    const rb = {
      rgb: makeRGB({ red, blue }),
      increment() {
        if (red < 15 && blue < 15) {
          incrementRed();
          incrementBlue();
        }
      },
      decrement() {
        if (red > 0 && blue > 0) {
          decrementRed();
          decrementBlue();
        }
      },
    };

    const gb = {
      rgb: makeRGB({ green, blue }),
      increment() {
        if (green < 15 && blue < 15) {
          incrementGreen();
          incrementBlue();
        }
      },
      decrement() {
        if (green > 0 && blue > 0) {
          decrementGreen();
          decrementBlue();
        }
      },
    };

    const redProps = {
      rgb: makeRGB({ red }),
      increment: incrementRed,
      decrement: decrementRed,
    };
    const greenProps = {
      rgb: makeRGB({ green }),
      increment: incrementGreen,
      decrement: decrementGreen,
    };
    const blueProps = {
      rgb: makeRGB({ blue }),
      increment: incrementBlue,
      decrement: decrementBlue,
    };

    return {
      all,
      rg,
      rb,
      gb,
      red: redProps,
      green: greenProps,
      blue: blueProps,
    };
  }, [red, green, blue]);
};
