import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  text-align: center;

  p {
    margin-top: 50px;
    font-size: 20px;
  }
`;

export default function Loading() {
  const [text, setText] = useState("Loading");

  useEffect(() => {
    if (text === "Loading....") {
      const timer = setTimeout(() => setText("Loading"));
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setText(text + ".");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <LoadingContainer>
      <p>{text}</p>
    </LoadingContainer>
  );
}
