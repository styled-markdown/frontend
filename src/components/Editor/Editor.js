import React, { useState } from "react";
import styled from "styled-components";
import MarkdownIt from "markdown-it";

import { markdownExample } from "../../constants/constants";

const EditorContainer = styled.div`
  width: 30%;
  min-width: 500px;
  height: 70vh;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.5);
`;

const EditorBody = styled.div`
  height: 100%;
  outline: none;
  overflow: auto;
  white-space: pre-line;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dadada;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #c2c4b6;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: #c2c4b6;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export default function Editor() {
  const md = new MarkdownIt();
  const [text, setText] = useState(markdownExample);

  const handleInput = (event) => {
    setText(event.target.innerText);
  };

  return (
    <>
      <EditorContainer>
        <EditorBody
          contentEditable
          suppressContentEditableWarning={true}
          onInput={handleInput}
        >
          {markdownExample}
        </EditorBody>
      </EditorContainer>
      <EditorContainer>
        <EditorBody
          dangerouslySetInnerHTML={{ __html: md.render(text) }}
        ></EditorBody>
      </EditorContainer>
    </>
  );
}
