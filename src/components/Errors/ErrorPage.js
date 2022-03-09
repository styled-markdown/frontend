import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  text-align: center;

  p {
    margin-top: 50px;
    font-size: 20px;
  }
`;

export default function ErrorPage() {
  return (
    <ErrorPageContainer>
      <p>오류가 발생했습니다. 다시 시도해주세요.</p>
    </ErrorPageContainer>
  );
}
