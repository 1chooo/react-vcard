import React, { FunctionComponent } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const GitHub: FunctionComponent = ({}) => {
  return (
    <section className="about-text">
      <p>
        <h3><code> $ ls -al GitHub Stats</code></h3>
      </p>
      <Row style={{}}>
        <GitHubCalendar
          username="1chooo"
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          fontSize={16}
          style={{ fontWeight: 'bold'}}
          // fill: 'hsl(45, 100%, 71%)' 
        />
      </Row>
    </section>
  );
}

export default GitHub;
