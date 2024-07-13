import {
  MdOutlineDevices,
} from "react-icons/md";

import {
  ProfessionalExperienceProps,
  professionalExperiences,
} from '../../config/Resume/ProfessionalExperience';


const Working: React.FC = () => {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <MdOutlineDevices />
        </div>

        <h3 className="h3">Professional Experience</h3>
      </div>

      <ol className="timeline-list">
        {professionalExperiences.map((
          professionalExperiences: ProfessionalExperienceProps,
          index: number,
        ) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">
              {professionalExperiences.title}
              <span style={{ float: "right" }}>{professionalExperiences.location}</span>
            </h4>
            {professionalExperiences.description}
          </li>
        ))}
      </ol>

    </section>
  );
}

export default Working;
