import {
  IoSchoolOutline
} from "react-icons/io5";

import {
  EducationProps,
  newEducation,
} from '../../config/ResumeData';


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
        {newEducation.map((
          newEducation: EducationProps,
          index: number,
        ) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">
              {newEducation.title}
              <span style={{ float: "right" }}>{newEducation.location}</span>
            </h4>
            {newEducation.description}
          </li>
        ))}
      </ol>


    </section>
  );
}

export default Education;
