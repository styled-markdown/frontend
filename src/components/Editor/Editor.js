import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { markdownParser as md } from "../../utils/markdown";

const Article = styled.div`
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

const EditorBody = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding-right: 10px;
  outline: none;
  overflow: auto;
  resize: none;
  white-space: pre-line;
  font-size: 15px;
`;

const PreviewBody = styled.div`
  height: 100%;
  padding-right: 10px;
  outline: none;
  overflow: auto;
  font-size: 15px;
`;

export default function Editor({ text, onChange }) {
  return (
    <Article>
      <EditorContainer>
        <EditorBody
          className="editorContainer"
          onChange={onChange}
          value={text}
          spellCheck="false"
        ></EditorBody>
      </EditorContainer>
      <EditorContainer>
        <PreviewBody
          className="editorContainer"
          dangerouslySetInnerHTML={{ __html: md.render(text) }}
        ></PreviewBody>
      </EditorContainer>
    </Article>
  );
}

Editor.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
