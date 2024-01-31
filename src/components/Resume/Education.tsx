import { IoSchoolOutline } from "react-icons/io5";

function Education() {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <IoSchoolOutline />
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">
        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Bachelor's degree, Atmospheric Science</h4>

          <span>Sep. 2020 — present.</span>

          <p className="timeline-text">
            <a
              href="https://www.ncu.edu.tw/"
              target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >
              National Central University</a> | 📍 Taoyuan, Taiwan
          </p>

          <p className="timeline-text">
            Computer Science & Information Engineering
          </p>

        </li>
      </ol>

    </section>
  );
}

export default Education;
