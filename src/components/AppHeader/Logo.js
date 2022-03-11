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

  .logoImgContainer {
    height: 100%;
    margin: 0 5px;
    object-fit: scale-down;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 100%;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: #ffffff;
    user-select: none;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <div className="logoImgContainer">
        <img src="/icons/logo_white.png" alt="logo" />
      </div>
      <Link to="/">
        <p>Styled</p>
        <p>Markdown</p>
      </Link>
    </LogoContainer>
  );
}
