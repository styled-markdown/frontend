import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { markdownParser as md } from "../../utils/markdown";

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

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

export default function Editor({ text, onInput }) {
  const [body, setBody] = useState("");

  useEffect(() => {
    setBody(text);
  }, []);

  return (
    <Article>
      <EditorContainer>
        <EditorBody
          contentEditable
          suppressContentEditableWarning={true}
          onInput={onInput}
        >
          {body}
        </EditorBody>
      </EditorContainer>
      <EditorContainer>
        <EditorBody
          dangerouslySetInnerHTML={{ __html: md.render(text) }}
        ></EditorBody>
      </EditorContainer>
    </Article>
  );
}

Editor.propTypes = {
  text: PropTypes.string,
  onInput: PropTypes.func.isRequired,
};
