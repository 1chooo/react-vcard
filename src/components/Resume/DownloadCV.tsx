import {
  IoCloudDownloadOutline
} from "react-icons/io5";


const DownloadCV = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoCloudDownloadOutline />
        </div>

        <a href="./cv.pdf" target="_blank" className="code-highlight-yellow" style={{ fontWeight: 'bold' }}>
          <u>Download Hugo's full Curriculum Vitae/Resume (Feb. 2024)</u>
        </a>
      </div>
    </section>
  );
}

export default DownloadCV;
