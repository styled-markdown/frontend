export const markdownExample = `# Styled-Markdown
---

## !!Styled-Markdown에 오신 것을 환영합니다.!!

Styled-Markdown은 마크다운 문법을 기반으로 한 웹 문서 에디터입니다. 기존의 마크다운 문법과 함께 몇 가지 확장된 스타일 문법을 제공합니다.  

다꾸하듯 문서는 꾸미고 싶고, 마우스는 쓰기 귀찮은 분이 계시다면 꼭 한 번 체험해보세요!

## 기본 사용법

왼쪽에 마크다운 문법으로 글을 쓰시면 오른쪽에 결과물이 나타납니다.  
얼마든지 원하는 대로 쓰고 수정해 보세요.

예를 들어 *이탤릭*은 별표 하나로,  
**볼드체**는 별표 두 개로 감싸면 됩니다.  
~~취소선~~은 물결 두 개로 감싸면 되죠.

## 제목은 이렇게 쓰세요

- 제목은 #부터 ######까지 총 6가지를 지원합니다.
- 리스트는 이렇게 쓰시면 됩니다.
  - 들여 쓰면 아래 단위의 리스트를 작성할 수 있습니다.
  - 해 볼까요?
  - 하나, 둘, 셋

* 별표로 표시할 수도 있어요.
  * 탭을 쓰면 이렇게 되죠.
    * 더 깊이도 가능합니다.

## 스타일은 이렇게 적용해 보세요.

### 문자열 강조

!!강조해야 하는 문자열!!은 느낌표 두 개로 감싸보세요.  
기본 붉은 색과 볼드체 스타일을 더합니다.

### 문자열 색상 변경

\`\`\`
 [%색상_문자열%]
\`\`\`

강조로 부족하다면 직접 색상을 지정해보세요.  
변경하고 싶은 문자열을 %royalblue_이렇게 색상 키워드와 함께% 써 보세요.  

### 문자열 배경색 적용

\`\`\`
 [%%색상_문자열%%]
\`\`\`

문자열에 배경색을 더하고 싶다면 %%tomato_이렇게 쓸 수도%% 있습니다.  
하이라이트를 주고 싶다면 %%yellow_하이라이트%%와 같이 쓰면 되겠죠?

> 색상은 단어만 적용되나요?

자주 쓰는 색상 코드가 있다면 그대로 적용할 수 있어요.

%%#fef5f1_은은한 퍼플%%  
%%#FFDDEE_봄이 생각나는 파스텔 핑크%%  
%%rgb(218, 219, 189)_부드러운 연녹색%%

%%#fef5f1_세 가지%%를 %%#FFDDEE_함께 써도%% %%rgb(218, 219, 189)_좋습니다.%%

> 다른 스타일도 추가 되나요?

추후 문서 단위로 사용자 설정 탬플릿 스타일을 지원할 수 있도록 열심히 준비 중입니다.

> 어디서 쓸 수 있나요?

아쉽게도 지금 당장 적용할 수 있는 곳은 없어요.  
대신 이렇게 작성한 글을 HTML로 내려 받으실 수 있습니다.  
블로그에 자주 글을 쓰는 분이시라면 그대로 복사해서 적용할 수 있어요.

또한 구글 계정으로 로그인하시면  
작성한 문서를 보관하고 언제든 수정하실 수 있어요.

`;

export const styles = `
  <style>
    h1 {
      margin-block-start: 0.67em;
      margin-block-end: 0.4em;
    }

    h2 {
      margin-block-start: 0.83em;
      margin-block-end: 0.5em;
    }

    p {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }

    blockquote {
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding: 10px 0;
      padding-left: 15px;
      background-color: #DADADA;
    }

    blockquote > p {
      padding-left: 10px;
      border-left: 2px solid #000000;
      content: " ";
    }

    p code {
      margin: 0 5px;
      padding: 0 5px;
      border-radius: 5px;
      background-color: #DADADA;
      color: #5D7599
    }

    pre {
      background-color: #DADADA;
      padding: 5px;
    }

    pre code {
      color: #5D7599;
    }
  </style>
`;
