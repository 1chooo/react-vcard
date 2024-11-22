import { IoCloudDownloadOutline } from "react-icons/io5";
import IconBox from "../icon-box";
import "@/styles/resume/download-cv.css";

const DownloadCV = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <IconBox icon={IoCloudDownloadOutline} />

        <a href="./cv.pdf" target="_blank" className="hyperlink-highlight">
          Download Hugo&apos;s full Curriculum Vitae/Resume (October 2024)
        </a>
      </div>
    </section>
  );
}

export default DownloadCV;
