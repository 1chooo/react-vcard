import { PiBooks } from "react-icons/pi";

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

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">
            GS4719 Python Programming
          </h4>

          <span>Sep, 2023 - Jan, 2024</span>

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
            GitHub: <a
              href="https://github.com/NCU-GS4719-Python/"
              target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >
              NCU-GS4719-Python
            </a> | Course Website: <a
              href="https://ncuedu.tw/"
              target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >
              NCUEDU
            </a>
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">AP4063 Weather and Artificial Intelligence Ⅰ/Ⅱ</h4>

          <span>Sep, 2023 - present</span>

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
            GitHub: <a
              href="https://github.com/weather-and-ai" target="_blank"
              className="code-highlight-yellow"
              rel="noreferrer"
            >
              Weather and Artificial Intelligence
            </a>
          </p>

        </li>

      </ol>

    </section>
  );
}

export default Teaching;
