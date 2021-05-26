import { render } from "react-dom";
import styled from "styled-components";
import { BodyCounter } from "./BodyCounter";
import { ColorGradient } from "./ColorGradient";
import { ColorGroup } from "./ColorGroup";
import ColorList from "./ColorList";
import { ColorListContextProvider } from "./ColorListContext";

const StyledGrid = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  justify-content: space-evenly;

  > * {
    flex-basis: 50%;
    max-width: 60rem;
  }
`;

const App = () => {
  return (
    <ColorListContextProvider>
      <BodyCounter />
      <StyledGrid>
        <ColorGroup red={8} green={8} blue={8} />
        <ColorList />
      </StyledGrid>
    </ColorListContextProvider>
  );
};

render(<App />, document.querySelector("#app"));
