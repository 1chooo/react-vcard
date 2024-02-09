import { IoSchoolOutline } from "react-icons/io5";

const Education: React.FC = () => {
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

          <span>Sep. 2020 — Jun. 2024</span>

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
            <em><strong>💻 Minor Specialty:</strong> Computer Science & Information Engineering</em>
          </p>

          <p className="timeline-text">
            <ul>
              <li>
                <strong>💻 Relevant Courses: </strong> 
                The Attack and Defense of Computers, 
                Principles of Programming Languages, 
                Computer Network, 
                Algorithmics, 
                Data Structures, 
                Assembly Language and System Programming, 
                Degital Design.
              </li>
            </ul>
          </p>

        </li>
      </ol>

    </section>
  );
}

export default Education;
