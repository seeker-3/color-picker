import { useCallback, useState } from "react";

export interface RGBPropsStrict {
  red: number;
  green: number;
  blue: number;
}

export interface RGBProps {
  red?: number;
  green?: number;
  blue?: number;
}

export type CounterProps = [number, () => void, () => void];

type OptionalColorProps = CounterProps | never[];

export interface ColorCounterProps {
  red?: OptionalColorProps;
  green?: OptionalColorProps;
  blue?: OptionalColorProps;
}

export const rgbToHex = ({ red = 0, green = 0, blue = 0 }: RGBProps) =>
  "#" + red.toString(16) + green.toString(16) + blue.toString(16);

export const rgbHookToRGB = ({
  red: [red] = [],
  green: [green] = [],
  blue: [blue] = [],
}: ColorCounterProps): RGBPropsStrict => ({ red, green, blue });

export const rgbHookToHex = (props: ColorCounterProps) =>
  rgbToHex(rgbHookToRGB(props));

const useCounter: (init: number) => CounterProps = (init: number) => {
  const [count, setCount] = useState(init);

  return [
    count,
    useCallback(() => setCount((count) => count + 1), []),
    useCallback(() => setCount((count) => count - 1), []),
  ];
};

export const useRGB = ({ red = 0, green = 0, blue = 0 }: RGBProps) => ({
  red: useCounter(red),
  green: useCounter(green),
  blue: useCounter(blue),
});
