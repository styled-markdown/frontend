import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { createDocApi } from "../../api";

const InputContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  input {
    width: 200px;
    margin: 0 5px;
  }
`;

export default function NewDoc() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const createDocMutation = useMutation(createDocApi, {
    onSuccess: (data) => {
      const { docsId } = data.data;
      navigate(`/docs/detail/${docsId}`);
    },
  });

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCreateButtonClick = () => {
    createDocMutation.mutate(title);
  };

  return (
    <InputContainer>
      <input
        placeholder="문서 제목을 입력해주세요"
        value={title}
        onChange={handleTitleInputChange}
      ></input>
      <button onClick={handleCreateButtonClick}>새 문서 만들기</button>
    </InputContainer>
  );
}
