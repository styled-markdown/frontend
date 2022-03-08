import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { createDocApi } from "../../api";

const EmptyListContainer = styled.div`
  text-align: center;

  p {
    margin-top: 50px;
    font-size: 20px;
  }

  input {
    width: 200px;
    margin: 0 5px;
  }
`;

export default function EmptyList() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const createDocMutation = useMutation(createDocApi, {
    onSuccess: (data) => {
      const { docsId } = data.data;
      navigate(`/docs/${docsId}`);
    },
  });

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCreateButtonClick = () => {
    createDocMutation.mutate(title);
  };

  return (
    <EmptyListContainer>
      <p>생성된 문서가 없습니다.</p>
      <div>
        <input
          placeholder="문서 제목을 입력해주세요"
          value={title}
          onChange={handleTitleInputChange}
        ></input>
        <button onClick={handleCreateButtonClick}>새 문서 만들기</button>
      </div>
    </EmptyListContainer>
  );
}
