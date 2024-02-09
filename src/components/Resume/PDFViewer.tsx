import React from "react";
import { Document, Page } from "react-pdf";
import onePageResume from "../../Assets/Documents/cv.pdf";

const PDFViewer: React.FC = () => {
  return (
      <Document file={onePageResume}>
        <Page pageNumber={1} />
      </Document>
  );
};

export default PDFViewer;
