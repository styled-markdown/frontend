import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;

  p {
    margin-top: 50px;
    font-size: 20px;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <p>페이지를 찾을 수 없습니다.</p>
    </NotFoundContainer>
  );
}
