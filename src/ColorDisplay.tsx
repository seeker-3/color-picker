import styled from "styled-components";

export type RGB = {
  red?: number;
  green?: number;
  blue?: number;
};

export const makeRgb = ({ red = 0, green = 0, blue = 0 }: RGB) =>
  "#" + red.toString(16) + green.toString(16) + blue.toString(16);

interface ColorDisplayProps {
  rgb: string;
}

// const Component = styled.div.attrs((props) => ({
//   style: {
//     background: props.background,
//   },
// }))`
//   width: 100%;
// `;

const StyledColorDisplayAttr = styled.div.attrs<{ rgb: string }>(({ rgb }) => ({
  style: { background: rgb },
}))`
  padding: 5rem;
  border: 1px solid black;
  text-align: center;
  max-width: 22%;
  margin-left: auto;
  margin-right: auto;
  p + p {
    color: white;
  }
`;

export const ColorDisplay = ({ rgb }: ColorDisplayProps) => (
  //@ts-ignore
  <StyledColorDisplayAttr rgb={rgb}>
    <p>{rgb}</p>
    <p>{rgb}</p>
  </StyledColorDisplayAttr>
);
