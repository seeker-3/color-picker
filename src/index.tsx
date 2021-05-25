import { render } from "react-dom";
import styled from "styled-components";
import { BodyCounter } from "./BodyCounter";
import { ColorGroup } from "./ColorGroup";
import ColorList from "./ColorList";
import { ColorListContextProvider } from "./ColorListContext";

const StyledApp = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-items: center;
`;

const App = () => {
  return (
    <ColorListContextProvider>
      <BodyCounter />
      <StyledApp>
        <ColorGroup red={8} green={8} blue={8} />
        <ColorList />
      </StyledApp>
    </ColorListContextProvider>
  );
};

render(<App />, document.querySelector("#app"));
