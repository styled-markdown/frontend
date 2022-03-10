import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 5px;
  padding: 5px;
`;

const Fields = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  user-select: none;

  > .indenting {
    width: 40px;
  }

  > .titleField {
    width: 40%;
    min-width: 200px;
  }

  > .dateField {
    width: 15%;
    min-width: 50px;
    text-align: center;
    word-break: break-all;

    > span {
      min-width: 50px;
    }
  }

  > .toolsField {
    width: 100px;
    text-align: center;

    > span {
      width: 30px;
      margin: 0 8px;
    }
  }
`;

export default function DocsListHeader() {
  return (
    <HeaderContainer className="docsListHeader">
      <Fields>
        <div className="indenting"></div>
        <div className="titleField">
          <span>제목</span>
        </div>
        <div className="dateField">
          <span>만든 날짜</span>
        </div>
        <div className="dateField">
          <span>마지막 수정</span>
        </div>
        <div className="toolsField">
          <span>수정</span>
          <span>삭제</span>
        </div>
      </Fields>
    </HeaderContainer>
  );
}
