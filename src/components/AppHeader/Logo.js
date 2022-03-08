import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  span {
    font-size: 20px;
    color: #ffffff;
    user-select: none;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <span>Styled-Markdown</span>
      </Link>
    </LogoContainer>
  );
}
