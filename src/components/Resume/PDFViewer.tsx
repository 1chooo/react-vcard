import React from "react";
import { Document, Page } from "react-pdf";
import onePageResume from "../../Assets/Documents/cv.pdf";

const PDFViewer = () => {
  return (
    <div>
      <h2>CV Viewer</h2>
      {/* <Document file={onePageResume}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};

export default PDFViewer;
