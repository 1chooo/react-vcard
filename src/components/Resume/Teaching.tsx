import {
  PiBooks
} from "react-icons/pi";


import {
  ResumeProps,
  courses
} from '../../config/ResumeData';


const Teaching: React.FC = () => {

  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <PiBooks />
        </div>

        <h3 className="h3">Teaching</h3>
      </div>

      <ol className="timeline-list">
        {courses.map((
          course: ResumeProps,
          index: number
        ) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">{course.title}</h4>
            <span>{course.duration}</span>
            {course.description}
          </li>
        ))}
      </ol>

    </section>
  );
}

export default Teaching;
