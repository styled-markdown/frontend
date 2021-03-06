import React from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import styled from "styled-components";
import PropTypes from "prop-types";

import ExportToolbarButton from "./ExportToolbarButton";

import { markdownParser as md } from "../../utils/markdown";
import { saveDocApi } from "../../api";
import { styles } from "../../constants";

const ExportToolbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default function ExportToolbar({ text, mode }) {
  const { id } = useParams();

  const handleCopyHtmlClick = async () => {
    try {
      await navigator.clipboard.writeText(md.render(text));
      alert("정상적으로 복사되었습니다.");
    } catch {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleSaveHtmlClick = () => {
    const newBlob = new Blob([styles, md.render(text)], {
      type: "text/html",
      endings: "native",
    });

    const url = window.URL.createObjectURL(newBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.html";
    link.click();
    link.remove();
  };

  const saveDocMutation = useMutation(saveDocApi, {
    onError: (error) => {
      console.error(error);
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    },
    onSuccess: () => {
      alert("저장되었습니다.");
    },
  });

  return (
    <>
      <ExportToolbarContainer>
        {mode === "detail" && (
          <ExportToolbarButton
            name="SAVE"
            onClick={() => saveDocMutation.mutate({ id, body: text })}
          />
        )}
        <ExportToolbarButton name="Copy HTML" onClick={handleCopyHtmlClick} />
        <ExportToolbarButton
          name="Save as Styled HTML"
          onClick={handleSaveHtmlClick}
        />
      </ExportToolbarContainer>
    </>
  );
}

ExportToolbar.propTypes = {
  text: PropTypes.string,
  mode: PropTypes.string,
};
