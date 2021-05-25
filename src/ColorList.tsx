import useColorList from "./ColorListContext";
import { ColorDisplay } from "./ColorDisplay";
import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";

const StyledColorList = styled.div`
  > * + * {
    margin-top: 2rem;
  }
`;

export default function ColorList() {
  const [list, { removeColor }] = useColorList();

  return (
    <div>
      <BlackWhiteText text="click to remove color" />
      <StyledColorList>
        {list.map((color, i) => (
          <ColorDisplay
            key={i}
            rgb={color}
            onClick={() => removeColor(color)}
          />
        ))}
      </StyledColorList>
    </div>
  );
}
