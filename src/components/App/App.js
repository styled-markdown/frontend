import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

import AppHeader from "../AppHeader/AppHeader";
import Editor from "../Editor/Editor";
import ExportToolbar from "../ExportToolbar/ExportToolbar";

const AppSection = styled.section`
  padding: 20px;

  .welcome {
    margin: 10px;
    text-align: center;
  }
`;

const AppArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const ExportToolbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default function App() {
  return (
    <RecoilRoot>
      <AppHeader />
      <AppSection>
        <h1 className="welcome">어서오세요, Styled-markdown은 처음이신가요?</h1>
        <AppArticle>
          <Editor />
        </AppArticle>
        <ExportToolbarContainer>
          <ExportToolbar />
        </ExportToolbarContainer>
      </AppSection>
    </RecoilRoot>
  );
}
