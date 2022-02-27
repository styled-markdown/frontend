import React from "react";
import styled from "styled-components";

import Login from "./Login";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <Login />
    </NavBarContainer>
  );
}
