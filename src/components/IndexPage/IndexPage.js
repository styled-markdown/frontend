import React, { useState } from "react";
import styled from "styled-components";

import Editor from "../Editor/Editor";
import ExportToolbar from "../ExportToolbar/ExportToolbar";

import { markdownExample } from "../../constants";

const BodyContainer = styled.div`
  padding: 20px;

  .welcome {
    margin: 10px;
    text-align: center;
  }
`;

export default function IndexPage() {
  const [text, setText] = useState(markdownExample);

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  return (
    <BodyContainer>
      <h1 className="welcome">어서오세요, Styled-markdown은 처음이신가요?</h1>
      <Editor text={text} onChange={handleTextInput} />
      <ExportToolbar text={text} />
    </BodyContainer>
  );
}
