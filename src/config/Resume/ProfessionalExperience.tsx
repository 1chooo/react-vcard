export interface ProfessionalExperienceProps {
  title: string;
  description: JSX.Element[];
  location: string;
}

export const professionalExperiences: ProfessionalExperienceProps[] = [
  {
    title: "eCloudvalley Digital Technology",
    description: [
      (
        <p>
          <a
            href="https://www.ecloudture.com/en/internship-program/"
            className="profession-experience-title"
            target="_blank"
            rel="noreferrer"
          >
            Cloud Engineer Intern
          </a>
          <span className="profession-experience-duration">
            🗓️ Mar. 2024 - May. 2024
          </span>
        </p>
      ),
      (
        <br />
      ),
    ],
    location: "📍 New Taipei, Taiwan"
  },
  {
    title: "Amazon Web Services",
    description: [
      (
        <p>
          <a
            href="https://www.ecloudture.com/en/internship-program/"
            className="profession-experience-title"
            target="_blank"
            rel="noreferrer"
          >
            Cloud Ambassador Technical Support
          </a>
          <span className="profession-experience-duration">
            🗓️ Aug. 2023 - Jan. 2024
          </span>
        </p>
      ),
      (
        <br />
      ),
      (
        <p className="timeline-text">
          <ul>
            <li>
              ☁️ Educated <strong>700+</strong> cloud developers and achieved <strong>96%</strong> of 
              user satisfaction by publishing and lecturing <strong>2+ technical workshops, 1 UAD</strong> on 
              AWS cloud computing services <strong>(Lex, Amazon S3, Lambda, API Gateway)</strong>.
            </li>
            <li>
              ☁️ <strong>Developed</strong> an <strong>open-source</strong> project called <strong>"AWS 101 LINE Bot"</strong> designed for integration with <strong>AWS 101</strong>.
            </li>
          </ul>
        </p>
      ),
    ],
    location: "📍 Taipei, Taiwan",
  },
  {
    title: "PEGATRON Corporation",
    description: [
      (
        <p>
          <a
            href="https://www.ecloudture.com/en/internship-program/"
            className="profession-experience-title"
            target="_blank"
            rel="noreferrer"
          >
            Software Engineer Intern
          </a>
          <span className="timeline-text">
            🗓️ Jul. 2023 - Aug. 2023
          </span>
        </p>
      ),
      (
        <br />
      ),
      (
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
      ),
    ],
    location: "📍 Taipei, Taiwan",
  },
  // {
  //   title: "National Central University",
  //   description: [
  //     (
  //       <p>
  //         <a
  //           href="https://www.ecloudture.com/en/internship-program/"
  //           className="profession-experience-title"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           Website Developer
  //         </a>
  //         <span className="profession-experience-duration">
  //           🗓️ Jul. 2022 - Jan. 2023
  //         </span>
  //       </p>
  //     ),
  //     (
  //       <br />
  //     ),
  //   ],
  //   location: "📍 Taoyuan, Taiwan"
  // },
];
