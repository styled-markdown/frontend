import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 5px 20px;
`;

export default function AppHeader() {
  return (
    <Header>
      <Logo />
      <NavBar />
    </Header>
  );
}
