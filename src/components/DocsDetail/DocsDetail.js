import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getDocDetailApi } from "../../api";

import Editor from "../Editor/Editor";
import NotFound from "../Errors/NotFound";
import ExportToolbar from "../ExportToolbar/ExportToolbar";
import Loading from "../Loading/Loading";

export default function DocsDetail() {
  const [text, setText] = useState("");
  const { id } = useParams();
  const { isSuccess, isError, isFetching } = useQuery(
    ["docDetail", id],
    () => getDocDetailApi(id),
    {
      retry: 0,
      onSuccess: (data) => {
        setText(data.data.body);
      },
    }
  );

  const handleEditorInput = (event) => {
    setText(event.target.innerText);
  };

  return (
    <>
      {isFetching && <Loading />}
      {isError && <NotFound />}
      {!isFetching && isSuccess && (
        <>
          <Editor text={text} onInput={handleEditorInput} />
          <ExportToolbar text={text} mode="detail" />
        </>
      )}
    </>
  );
}
