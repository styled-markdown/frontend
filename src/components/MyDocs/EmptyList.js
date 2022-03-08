import React from "react";
import styled from "styled-components";
import NewDoc from "../NewDoc/NewDoc";

const EmptyListContainer = styled.div`
  text-align: center;

  p {
    margin-top: 50px;
    font-size: 20px;
  }
`;

export default function EmptyList() {
  return (
    <EmptyListContainer>
      <p>생성된 문서가 없습니다.</p>
      <NewDoc />
    </EmptyListContainer>
  );
}
