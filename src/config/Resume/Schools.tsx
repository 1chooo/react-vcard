export interface ResumeProps {
  title: string;
  duration: string;
  description: JSX.Element[];
}

export const schools: ResumeProps[] = [
  {
    title: "Bachelor's degree, Atmospheric Science",
    duration: "Sep. 2020 — Jun. 2024",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ncu.edu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            National Central University</a> | 📍 Taoyuan, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          <em><strong>💻 Minor Specialty:</strong> Computer Science & Information Engineering</em>
        </p>
      ),
      (
        <p className="timeline-text">
          <ul>
            <li>
              <em><strong>💻 Relevant Courses (Graduate): </strong></em>
              The Attack and Defense of Computers,
              Software Engineering,
              Object-Oriented Analysis and Design,
            </li>
            <li>
              <em><strong>💻 Relevant Courses (Undergraduate): </strong></em>
              Linux And Edge Computing,
              Principles of Programming Languages,
              Operating System,
              Computer Organization,
              Computer Network,
              Algorithmics,
              Data Structures,
              Assembly Language and System Programming,
              Digital Design,
              Weather and Artificial Intelligence,
              Numerical Analysis.
            </li>
          </ul>
        </p>
      ),
    ],
  },
];



