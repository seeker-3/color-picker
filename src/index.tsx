import { useMemo } from "react";

import styled from "styled-components";

import { render } from "react-dom";
import { makeRgb } from "./ColorDisplay";
import { Counter, useCounter } from "./Counter";

import { ColorGradient } from "./ColorGradient";

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [red, bindRed] = useCounter();
  const [green, bindGreen] = useCounter();
  const [blue, bindBlue] = useCounter();

  const bind = useMemo(() => {
    const all = {
      increment() {
        if (red < 15 && green < 15 && blue < 15) {
          bindRed.increment();
          bindGreen.increment();
          bindBlue.increment();
        }
      },
      decrement() {
        if (red > 0 && green > 0 && blue > 0) {
          bindRed.decrement();
          bindGreen.decrement();
          bindBlue.decrement();
        }
      },
    };

    const rg = {
      increment() {
        if (red < 15 && green < 15) {
          bindRed.increment();
          bindGreen.increment();
        }
      },
      decrement() {
        if (red > 0 && green > 0) {
          bindRed.decrement();
          bindGreen.decrement();
        }
      },
    };

    const rb = {
      increment() {
        if (red < 15 && blue < 15) {
          bindRed.increment();
          bindBlue.increment();
        }
      },
      decrement() {
        if (red > 0 && blue > 0) {
          bindRed.decrement();
          bindBlue.decrement();
        }
      },
    };

    const bg = {
      increment() {
        if (green < 15 && blue < 15) {
          bindGreen.increment();
          bindBlue.increment();
        }
      },
      decrement() {
        if (green > 0 && blue > 0) {
          bindGreen.decrement();
          bindBlue.decrement();
        }
      },
    };

    return { all, rg, rb, bg };
  }, [red, green, blue]);

  return (
    <>
      <Counter rgb={makeRgb({ red, green, blue })} {...bind.all} />
      <CounterContainer>
        <Counter rgb={makeRgb({ red, green })} {...bind.rg} />
        <Counter rgb={makeRgb({ red, blue })} {...bind.rb} />
        <Counter rgb={makeRgb({ blue, green })} {...bind.bg} />
      </CounterContainer>
      <CounterContainer>
        <Counter rgb={makeRgb({ red })} {...bindRed} />
        <Counter rgb={makeRgb({ green })} {...bindGreen} />
        <Counter rgb={makeRgb({ blue })} {...bindBlue} />
      </CounterContainer>
      <ColorGradient />
    </>
  );
};

render(<App />, document.querySelector("#app"));
