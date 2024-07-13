import { PiTrophy } from "react-icons/pi";


import {
  ResumeProps,
  awardsAndLeaderships,
} from '../../config/ResumeData';


const AwardLeaderships: React.FC = () => {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <PiTrophy />
        </div>

        <h3 className="h3">Award & Leaderships</h3>
      </div>

      <ol className="timeline-list">
        {awardsAndLeaderships.map((
          awardAndLeadership: ResumeProps,
          index: number,
        ) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">{awardAndLeadership.title}</h4>
            <span>{awardAndLeadership.duration}</span>
            {awardAndLeadership.description}
          </li>
        ))}
      </ol>

    </section>
  );
}

export default AwardLeaderships;
