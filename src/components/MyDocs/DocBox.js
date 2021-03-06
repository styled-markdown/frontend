import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { convertDate, convertUpdatedDate } from "../../utils/utils";
import { deleteDocApi } from "../../api";
import { useMutation, useQueryClient } from "react-query";

const DocContainer = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid #a494d7;
  border-radius: 5px;
  background-color: #fef5f1;
`;

const DocInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;

  .arrowButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;

    > img {
      width: 30px;
      height: 30px;
    }
  }

  .tools {
    text-align: center;
    width: 100px;

    img {
      width: 30px;
      height: 30px;
      margin: 0 5px;
      cursor: pointer;
    }
  }

  .docTitle {
    width: 40%;
    min-width: 200px;
  }

  .docDate {
    width: 15%;
    min-width: 50px;
    text-align: center;
    word-break: break-all;

    > span {
      min-width: 50px;
    }
  }
`;

const DocPreview = styled.div`
  padding: 0 20px;
  word-break: break-all;
`;

export default function DocBox({ id, title, createdAt, updatedAt, summary }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const queryClient = useQueryClient();

  const deleteDocMutation = useMutation(deleteDocApi, {
    onSuccess: () => {
      queryClient.fetchQuery("docsList");
      alert("삭제되었습니다.");
    },
  });

  const handleArrowButtonClick = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  const handleDeleteClick = () => {
    deleteDocMutation.mutate(id);
  };

  return (
    <DocContainer>
      <DocInfo>
        <div onClick={handleArrowButtonClick} className="arrowButton">
          <img
            src={
              isPreviewOpen
                ? "/icons/arrow_drop_down.svg"
                : "/icons/arrow_right.svg"
            }
            alt="arrow"
          ></img>
        </div>
        <div className="docTitle">
          <span>{title}</span>
        </div>
        <div className="docDate createdAt">
          <span>{convertDate(createdAt)}</span>
        </div>
        <div className="docDate updatedAt">
          <span>{convertUpdatedDate(updatedAt)}</span>
        </div>
        <div className="tools">
          <Link to={`/docs/detail/${id}`}>
            <img src="/icons/edit.svg" alt="edit" />
          </Link>
          <img
            onClick={handleDeleteClick}
            src="/icons/delete.svg"
            alt="delete"
          />
        </div>
      </DocInfo>
      {isPreviewOpen && (
        <DocPreview>
          <p>{summary?.length ? summary : "작성된 내용이 없습니다."}</p>
        </DocPreview>
      )}
    </DocContainer>
  );
}

DocBox.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  summary: PropTypes.string,
};
