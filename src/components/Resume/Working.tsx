import {
  MdOutlineDevices,
} from "react-icons/md";

const Working: React.FC = () => {
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

          <p className="timeline-text">
            <ul>
              <li>
                ☁️ Educated <strong>700+ cloud developers</strong> and
                achieved 96% of user satisfaction by publishing and
                lecturing <strong>2+ technical workshops, 1 UAD</strong> on
                AWS cloud computing services <strong>(Lex, Amazon S3, Lambda, API Gateway)</strong>.
              </li>
              <li>
                ☁️ <strong>Develop</strong> an open-source
                project called <strong>"AWS 101 LINE Bot"</strong> designed
                for integration with <strong>AWS 101</strong>. This initiative
                led to contacting <strong><a
                  className="code-highlight-yellow"
                  href="https://linecorp.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >LINE Company</a></strong> and securing
                the opportunity to organize a visit to the company.
              </li>
              <li>
                ☁️ <strong>Technical Support</strong> within the
                <strong> Marketing Program</strong> enhances the technical
                understanding of marketing team members. This involves a
                detailed <strong>35+ page</strong> research study accompanied
                by a comprehensive presentation.
              </li>
            </ul>
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

          <p className="timeline-text">
            <ul>
              <li>
                <em><strong>Smart Robot, Smart World 🦾:</strong> Prompt-based Learning for manipulating with the Visual-World Robot</em>
              </li>
              <li>
                🦾 Implementing <strong>Prompt Engineering and <code>LangChain</code></strong> allows
                the <strong><a
                  className="code-highlight-yellow"
                  href="https://www.nvidia.com/en-us/omniverse/"
                  target="_blank"
                  rel="noreferrer"
                >NVIDIA Ominerve visual robot</a></strong> to function
                through <strong>speech or text</strong>, leading to an <strong>83%</strong> improvement
                in scenario test support across <strong>6 to 11</strong> scenarios.
              </li>
              <li>
                🦾 During the <strong>Proof of Concept (POC)</strong> phase,
                transform the trained model into a <strong>Web Application</strong> with
                a user interface using <strong><code>Gradio</code></strong>, the UI toolkit
                for the <strong><code>FastAPI</code></strong> framework.
              </li>
            </ul>
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
