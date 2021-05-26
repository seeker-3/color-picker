import useColorList from "./ColorListContext";
import { ColorSquare } from "./ColorSquare";
import styled from "styled-components";
import { BlackWhiteText } from "./BlackWhiteText";

const StyledColorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default function ColorList() {
  const [list, { removeColor }] = useColorList();

  return (
    <div>
      <BlackWhiteText text="click to remove color" />
      <StyledColorList>
        {list.map((color, i) => (
          <ColorSquare key={i} rgb={color} onClick={() => removeColor(color)} />
        ))}
      </StyledColorList>
    </div>
  );
}
