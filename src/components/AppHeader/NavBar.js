import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { loginState } from "../../recoil";
import Login from "./Login";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;

  a {
    text-decoration: none;
  }
`;

const NavButtonWrapper = styled.li`
  margin-left: 5px;
  list-style: none;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;

  ::after {
    padding-left: 5px;
    content: "|";
    cursor: default;
  }
`;

export default function NavBar() {
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <NavBarContainer>
      {isLoggedIn && (
        <>
          <Link to="/mydocs">
            <NavButtonWrapper>내 문서</NavButtonWrapper>
          </Link>
          <Link to="/docs/new">
            <NavButtonWrapper>새 문서 만들기</NavButtonWrapper>
          </Link>
        </>
      )}
      <Login />
    </NavBarContainer>
  );
}
