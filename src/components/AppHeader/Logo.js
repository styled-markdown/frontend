import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
  cursor: pointer;

  span {
    font-size: 20px;
    color: #ffffff;
    user-select: none;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <span>Styled-Markdown</span>
    </LogoContainer>
  );
}
