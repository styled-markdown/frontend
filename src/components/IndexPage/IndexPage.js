import React, { useState } from "react";
import styled from "styled-components";

import Editor from "../Editor/Editor";
import ExportToolbar from "../ExportToolbar/ExportToolbar";

import { markdownExample } from "../../constants";

const BodyContainer = styled.div`
  padding: 20px;
`;

export default function IndexPage() {
  const [text, setText] = useState(markdownExample);

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  return (
    <BodyContainer>
      <Editor text={text} onChange={handleTextInput} />
      <ExportToolbar text={text} />
    </BodyContainer>
  );
}
