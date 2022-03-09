import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { markdownState } from "../../recoil";

import Editor from "../Editor/Editor";
import ExportToolbar from "../ExportToolbar/ExportToolbar";

const AppSection = styled.section`
  padding: 20px;

  .welcome {
    margin: 10px;
    text-align: center;
  }
`;

export default function IndexPage() {
  const [text, setText] = useRecoilState(markdownState);

  const handleEditorInput = (event) => {
    setText(event.target.innerText);
  };

  return (
    <AppSection>
      <h1 className="welcome">어서오세요, Styled-markdown은 처음이신가요?</h1>
      <Editor text={text} onInput={handleEditorInput} />
      <ExportToolbar text={text} />
    </AppSection>
  );
}
