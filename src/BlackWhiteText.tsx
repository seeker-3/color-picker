import { FC } from "react";
import styled from "styled-components";

const StyledBlackWhiteText = styled.div`
  text-align: center;
  p + p {
    color: white;
  }
  margin-bottom: 1rem;
`;

export const BlackWhiteText: FC<{ text?: string }> = ({ text, children }) => (
  <StyledBlackWhiteText>
    <p>{text || children}</p>
    <p>{text || children}</p>
  </StyledBlackWhiteText>
);
