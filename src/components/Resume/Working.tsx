import {
  MdOutlineDevices,
} from "react-icons/md";

function Working() {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <MdOutlineDevices />
        </div>

        <h3 className="h3">Working</h3>
      </div>

      <ol className="timeline-list">
        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Cloud Developer Intern</h4>

          <span>Mar. 2024 - present.</span>

          <p className="timeline-text">
            <a
              href="https://www.ecloudture.com/en/internship-program/"
              className="code-highlight-yellow"
              target="_blank"
              rel="noreferrer"
            >
              eCloudValley
            </a> | 📍 New Taipei, Taiwan
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Technical Support Cloud Ambassador</h4>

          <span>Aug. 2023 - Jan. 2024</span>

          <p className="timeline-text">
            <a
              href="https://aws.amazon.com/tw/education/awseducate/"
              target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >Amazon Web Services
            </a> | 📍 Taipei, Taiwan
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Software Engineer Intern</h4>

          <span>Jul. 2023 - Aug. 2023</span>

          <p className="timeline-text">
            <a href="https://www.pegatroncorp.com/"
              target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >
              Pegatron Corporation
            </a> | 📍 Taipei, Taiwan
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Website Administrator</h4>

          <span>Jul. 2022 - Jan. 2023</span>

          <p className="timeline-text">
            <a
              href="https://www.ncu.edu.tw/"
              target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >
              National Central University
            </a> | 📍 Taoyuan, Taiwan
          </p>

        </li>
      </ol>


    </section>
  );
}

export default Working;
