import React from "react";
import { useRecoilValue } from "recoil";

import { markdownState } from "../../recoil";
import ExportToolbarButton from "./ExportToolbarButton";
import { markdownParser as md } from "../../utils/markdown";

export default function ExportToolbar() {
  const text = useRecoilValue(markdownState);

  const handleCopyHtmlClick = async () => {
    try {
      await navigator.clipboard.writeText(md.render(text));
      alert("정상적으로 복사되었습니다.");
    } catch {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleSaveHtmlClick = () => {
    const newBlob = new Blob([md.render(text)], {
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

  return (
    <>
      <ExportToolbarButton name="Copy HTML" onClick={handleCopyHtmlClick} />
      <ExportToolbarButton name="Save as HTML" onClick={handleSaveHtmlClick} />
    </>
  );
}
