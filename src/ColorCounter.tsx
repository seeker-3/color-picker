import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { ColorDisplay } from "./ColorDisplay";
import useColorList from "./ColorListContext";
import { CounterProps, Counter } from "./Counter";

// const [increment, decrement] = useMemo(
//   () => [
//     () => setCount((count) => (count < 15 ? count + 1 : count)),

//     () => setCount((count) => (count > 0 ? count - 1 : count)),
//   ],
//   []
// );

type ColorCounterInterface = (
  init: number
) => [number, () => void, () => void, Dispatch<SetStateAction<number>>];

export interface ColorCounterProps extends CounterProps {
  rgb: string;
}

export const useColorCounter: ColorCounterInterface = (init: number = 8) => {
  const [count, setCount] = useState(init);

  const increment = useCallback(
    () => setCount((count) => (count < 15 ? count + 1 : count)),
    []
  );

  const decrement = useCallback(
    () => setCount((count) => (count > 0 ? count - 1 : count)),
    []
  );

  return [count, increment, decrement, setCount];
};

export const ColorCounter = ({
  rgb,
  increment,
  decrement,
}: ColorCounterProps) => {
  const [, { addColor }] = useColorList();
  return (
    <div>
      <ColorDisplay rgb={rgb} onClick={() => addColor(rgb)} />
      <Counter increment={increment} decrement={decrement} />
    </div>
  );
};
