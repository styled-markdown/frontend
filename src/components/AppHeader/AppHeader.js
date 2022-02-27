import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #5d7599;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.5);
  padding: 10px 20px;
`;

export default function AppHeader() {
  return (
    <Header>
      <Logo />
      <NavBar />
    </Header>
  );
}
