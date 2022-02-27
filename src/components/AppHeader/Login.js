import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.li`
  list-style: none;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
`;

export default function Login() {
  return <LoginWrapper>로그인</LoginWrapper>;
}
