import React, { FunctionComponent } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub: FunctionComponent = ({ }) => {

  const yellowTheme = {
    light: ['hsl(0, 0%, 92%)', '#FFDA6B'],
    // for `dark` the default theme will be used
    dark: ["hsl(0, 0%, 22%)", "#FFDA6B"],
    // dark: ["hsl(0, 0%, 22%)", "hsl(225,92%,77%)"],
  };

  return (
    <section className="about-text">
      <p>
        <h3><code> $ ls -al GitHub Stats</code></h3>
      </p>
      <GitHubCalendar
        username="1chooo"
        blockSize={12}
        blockMargin={4}
        colorScheme="dark"
        blockRadius={2}
        fontSize={14}
        style={{ fontWeight: 'bold', }}
        theme={yellowTheme}
      />
    </section>
  );
}

export default GitHub;
